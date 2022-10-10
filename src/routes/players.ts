import express from 'express';
import Console from 'console';
import { ErrorException } from '../errors/errorException';
import { getPlayersFromFile } from '../utils';

const router = express.Router();

/* GET players sorted by rank. */
router.get('/', (_req, res) => {
  try {
    // Retreive players from json file
    const players = getPlayersFromFile();

    // Sort players by their rank
    const playersSorted = players.sort((playerA, playerB) => playerA.data.rank - playerB.data.rank);

    // Return list of sorted players
    return res.status(200).json({
      players: playersSorted,
    });
  } catch (err: Error | any) {
    Console.error(err.message);
    return ErrorException.getErrorResponse(500, res, err.message);
  }
});

router.get('/:id', (_req, res) => {
  try {
    // Declare a player id which is parameter
    const playerId = parseInt(_req.params.id, 10);

    // Declare the player to return
    let player;

    // Check if the parameter exists
    if (!playerId) {
      return ErrorException.getErrorResponse(500, res, 'Bad player id...');
    }

    // Retreive players from json file
    const players = getPlayersFromFile();

    // check if the given id matches with one of the players
    players.forEach((pl) => {
      if (pl.id === playerId) {
        player = pl;
      }
      return null;
    });

    // Return the player if id matches
    if (player) {
      return res.status(200).json({
        player,
      });
    }

    // If no player was found with this id an error is returned
    return ErrorException.getErrorResponse(404, res, 'No player found with this id ...');
  } catch (err: Error | any) {
    Console.error(err.message);
    return ErrorException.getErrorResponse(500, res, err.message);
  }
});

export default router;
