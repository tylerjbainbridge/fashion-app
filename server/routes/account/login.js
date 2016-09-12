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
      return res.send({ err: err.message });
    } else if (!user) {
      return res.send({ err: 'INCORRECT_CREDENTIALS' });
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        return res.send({ err: loginError.message });
      }
      return res.send({
        user: _.pick(user, ['username', '_id', 'id']),
        err: null,
      });
    });
  })(req, res, next);
};

export default login;
