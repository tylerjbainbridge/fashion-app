import express from 'express';
import passport from 'passport';
import { Account } from '../../../models';

const router = express();

router.post('/account', (req, res) => {
  const { username, password, firstName, lastName, email } = req.body;

  const newUser = new Account({
    username: username.replace(/\s/g, '').toLowerCase(),
    password,
    firstName,
    lastName,
    email,
  });

  Account.register(newUser, password, (err, account) => {
    if (err) {
      return res.send(err);
    } else if (account) {
      passport.authenticate('local', (err2, user) => {
        if (err2) {
          return res.send(err2);
        } else if (!user) {
          return res.send(new Error('Incorrect Credentials.'));
        }

        req.login(user, (err3) => {
          if (err3) {
            return res.send(err3);
          }

          return res.send(user);
        });
      })(req, res);
    }
  });
});

export default router;
