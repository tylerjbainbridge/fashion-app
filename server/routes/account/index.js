import express from 'express';
import passport from 'passport';
import { Strategy } from 'passport-local';
import { Account } from '../../models';
import AccountUpdateRouter from './crud/update';
import AccountCreateRouter from './crud/create';

const router = express();

//  Passport config
passport.use(new Strategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());
router.use(passport.initialize());
router.use(passport.session());

router.use('/update', AccountUpdateRouter);
router.use('/create', AccountCreateRouter);

router.get('/by/:username', (req, res) => {
  const { username } = req.params;

  Account.findByUsername(username, (err, usr) =>
    res.json(usr)
  );
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) {
      return res.send({ err: err.message });
    } else if (!user) {
      return res.send({ err: 'INCORRECT_CREDENTIALS' });
    }
    return req.login(user, (err2) => {
      if (err) {
        return res.send({ err: err2.message });
      }
      return res.send({
        user,
        err: null,
      });
    });
  })(req, res, next);
});

router.get('/getUser', (req, res) => {
  console.log(req.user);
  return res.send(req.user);
});


router.post('/checkUsername', (req, res) => {
  const { username } = req.body;

  Account.findByUsername(username, (err, usr) => {
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
