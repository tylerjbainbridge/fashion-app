import express from 'express';
const router = express();

router.post('/proPic', (req, res) => {
  res.send(req.body);
});

export default router;
