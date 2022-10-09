import express from 'express';

const router = express.Router();

/* GET users listing. */
router.get('/', (_req, res) => {
  const message = 'users';

  return res.status(200).json({
    message,
  });
});

export default router;
