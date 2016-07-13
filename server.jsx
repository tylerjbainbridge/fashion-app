'use strict';

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

// Models
import { Account } from './models';

const PORT = 3000;
const app = express();

app.use('/', express.static(path.join(__dirname, 'dist')));
app.use('/', express.static(path.join(__dirname, 'views')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose.connect('mongodb://localhost/redux');

// Passport config
passport.use(new Strategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

app.use(require('express-session')({
    secret: 'memes',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/dist', proxy(url.parse('http://localhost:8080/assets')));

app.post('/createAccount', (req, res) => {
  var username = req.body.username.replace(/\s/g, '').toLowerCase();
  var password = req.body.password;

  console.log('attempting to create account')
  Account.register(new Account({username: username}), password, (err, account) => {
      if(err){
          res.send(err);
      }else if(account){
          passport.authenticate('local', (err, user)=>{
              if (err)
                  res.send(err);
              if (!user)
                  res.send(new Error('Incorrect Credentials.'));

              req.login(user, (err)=>{
                  if (err)
                      res.send(err);
                  else
                      res.send(user);
              });

          })(req, res);
          // res.send(account);
      }
  });
});

app.post('/login', (req, res, next) => {
  req.body.username = req.body.username.toLowerCase();

  passport.authenticate('local', (err, user)=>{
    if (err)
      return res.send({ err: err.message });
    if (!user)
      return res.send({ err: 'INCORRECT_CREDENTIALS'});

    req.login(user, (err)=>{
      if (err)
        return res.send({ err: err.message });
      else
        return res.send({
          user,
          err: null
        });
    });

  })(req, res);
});

app.get('/getUser', (req, res) => {
  console.log(req.user);
  res.send(req.user);
});

app.post('/checkUsername', (req, res) => {
  Account.findByUsername(req.body.username, (err, usr) => {
    res.json({ username: usr ? usr.username : false });
  })
});

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

export default app;
