import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', (_req, res) => {
  const message = 'index';

  return res.status(200).json({
    message,
  });
});

export default router;
