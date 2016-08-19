import passport from 'passport';
import mongoose from 'mongoose';
import _ from 'lodash';
import { Strategy } from 'passport-local';
import { Account } from '../../models';

mongoose.promise = require('bluebird');

//  Passport config
passport.use(new Strategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

const login = (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) {
      res.send({ err: err.message });
    } else if (!user) {
      res.send({ err: 'INCORRECT_CREDENTIALS' });
    }
    req.login(user, (loginError) => {
      if (loginError) {
        res.send({ err: loginError.message });
      } else {
        res.send({
          user: _.pick(user, ['username', '_id', 'id']),
          err: null,
        });
      }
    });
  })(req, res, next);
};

export default login;
