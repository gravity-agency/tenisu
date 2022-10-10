import express from 'express';
import Console from 'console';
import fs from 'fs';

const router = express.Router();

/* GET players sorted by rank. */
router.get('/', (_req, res) => {
  const dataArray = JSON.parse(fs.readFileSync('src/headtohead.json', 'utf-8'));
  Console.log(dataArray.players);

  const message = 'index';

  return res.status(200).json({
    message,
  });
});

export default router;
