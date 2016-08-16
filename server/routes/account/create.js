import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import Promise from 'bluebird';
import { Strategy } from 'passport-local';
import { Account } from '../../models';

mongoose.promise = require('bluebird');

const router = express();

//  Passport config
passport.use(new Strategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());
router.use(passport.initialize());
router.use(passport.session());

router.post('/account', (req, res) => {
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
    Account.register(newUser, password, (err, account) => {
      if (account) return account;
      throw err;
    });
  })
  .then(() => {
    passport.authenticate('local');
  })
  .then((user) => {
    if (!user) {
      throw new Error('Incorrect Credentials.');
    }
    req.login(user, (err) => {
      if (err) throw err;
      return user;
    });
  })
  .then((user) => {
    res.send(user);
  })
  .catch((err) => {
    console.dir(err);
  });

  // Account.register(newUser, password, (registrationError, account) => {
  //   if (registrationError) {
  //     return res.send(registrationError);
  //   } else if (account) {
  //     return passport.authenticate('local', (authError, user) => {
  //       if (authError) {
  //         return res.send(authError);
  //       } else if (!user) {
  //         return res.send(new Error('Incorrect Credentials.'));
  //       }
  //
  //       return req.login(user, (loginError) => {
  //         if (loginError) {
  //           return res.send(loginError);
  //         }
  //
  //         return res.send(user);
  //       });
  //     })(req, res);
  //   }
  //   return res.send(404);
  // });
});

export default router;
