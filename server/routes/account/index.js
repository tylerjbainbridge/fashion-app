import express from 'express';
import passport from 'passport';
import { Strategy } from 'passport-local';
import { Account } from '../../models';

//  routers
import AccountUpdate from './update';
import AccountRegister from './register';
import AccountLogin from './login';

const router = express();

passport.use(new Strategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());
router.use(passport.initialize());
router.use(passport.session());

router.use('/update', AccountUpdate);
router.use('/register', AccountRegister);
router.use('/login', AccountLogin);

router.get('/by/:username', (req, res) => {
  const { username } = req.params;

  Account.findByUsername(username, (err, usr) =>
    res.json(usr)
  );
});

router.get('/getUser', (req, res) => res.send(req.user));

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
