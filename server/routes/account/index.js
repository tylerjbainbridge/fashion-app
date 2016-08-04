import express from 'express';
import passport from 'passport';
import { Strategy } from 'passport-local';
import { Account } from '../../models';

const router = express();
//  Passport config
passport.use(new Strategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());
router.use(passport.initialize());
router.use(passport.session());

router.get('/by/:username', (req, res) => {
  const { username } = req.params;

  Account.findByUsername(username, (err, usr) =>
    res.json(usr)
  );
});

router.post('/createAccount', (req, res) => {
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

router.post('/login', (req, res) => {
  passport.authenticate('local', (err, user) => {
    if (err) {
      return res.send({ err: err.message });
    } else if (!user) {
      return res.send({ err: 'INCORRECT_CREDENTIALS' });
    }

    req.login(user, (err2) => {
      if (err) {
        return res.send({ err: err2.message });
      }

      return res.send({
        user,
        err: null,
      });
    });
  })(req, res);
});

router.get('/getUser', (req, res) =>
  res.send(req.user)
);

router.post('/checkUsername', (req, res) => {
  const { username } = req.body;

  Account.findByUsername(req.body.username, (err, usr) => {
    res.json({ username: usr ? usr.username : false });
  });
});

//  logout user and redirect to home
router.get('/logout', (req, res) => {
  req.logout();
  res.sendStatus(200);
});

router.get('/loggedin', (req, res) =>
  res.send(req.isAuthenticated() ? req.user : '0')
);

export default router;
