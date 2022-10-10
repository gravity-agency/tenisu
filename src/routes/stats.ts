import express from 'express';
import Console from 'console';
import { ErrorException } from '../errors/errorException';
import {
  calculateAverageIMC,
  calculateGamesWinnerCountry,
  calculateMedianPlayerHeight,
  getPlayersFromFile,
} from '../utils';

const router = express.Router();

/* GET players sorted by rank. */
router.get('/', (_req, res) => {
  try {
    // Retreive players from json file
    const players = getPlayersFromFile();

    return res.status(200).json({
      gamesWinnerCountry: calculateGamesWinnerCountry(players),
      averagePlayerIMC: calculateAverageIMC(players),
      medianPlayerHeight: calculateMedianPlayerHeight(players),
    });
  } catch (err: Error | any) {
    Console.error(err.message);
    return ErrorException.getErrorResponse(500, res, err.message);
  }
});

export default router;
