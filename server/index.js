import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import passport from 'passport';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { Strategy } from 'passport-local';
import logger from 'morgan';
import proxy from 'proxy-middleware';
import url from 'url';

//  Models
import { Account } from './models';

//  Routers
import AccountRouter from './routes/account';

const app = express();
const {
  DB_HOST,
  DB_NAME,
  SECRET,
  WEBPACK_HOST,
  WEBPACK_PORT,
} = process.env;
const DB_URL = `mongodb://${DB_HOST}/${DB_NAME}`;
mongoose.connect(DB_URL);

//  Passport config
passport.use(new Strategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());
app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', express.static(path.join(__dirname, 'dist')));
app.use('/', express.static(path.join(__dirname, 'views')));

//  Storing a user in the express-session.
app.use(require('express-session')({
  secret: SECRET,
  resave: false,
  saveUninitialized: false,
}));

//  Using a proxy for the assets until a better solution is found.
const assetsURL = `http://${WEBPACK_HOST}:${WEBPACK_PORT}/assets`;
app.use('/dist', proxy(url.parse(assetsURL)));

app.use('/user', AccountRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

export default app;
