import mongoose from 'mongoose';
import passport from 'passport';
import Promise from 'bluebird';
import _ from 'lodash';
import { Strategy } from 'passport-local';
import { Account } from '../../models';

passport.use(new Strategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());
mongoose.promise = require('bluebird');

//  Passport config
const register = (req, res) => {
  Promise.try(() => {
    const { body } = req;
    if (!body) throw new Error('No body.');
    else return body;
  })
  .then((body) => {
    const { password, firstName, lastName, email, username } = body;
    const sanitizedUsername = username.replace(/\s/g, '').toLowerCase();
    const newUser = new Account({
      username: sanitizedUsername,
      firstName,
      lastName,
      email,
    });
    Account.register(newUser, password, (err, user) => {
      if (user) {
        return passport.authenticate('local', (authError, authUser) => {
          if (authError) {
            throw authError;
          } else if (!authUser) {
            throw new Error('Incorrect Credentials.');
          }
          return req.login(authUser, (loginError) => {
            if (loginError) {
              throw loginError;
            }
            return res.send(_.pick(user, ['username', '_id']));
          });
        })(req, res);
      }
      throw err;
    });
  })
  .catch((err) => {
    console.dir(err);
    res.send(err);
  });
};

export default register;
