import fs from 'fs';
import Player from './models/player';
import CountryWins from './models/countryWins';

export function getPlayersFromFile() {
  const dataArray = JSON.parse(fs.readFileSync('src/headtohead.json', 'utf-8'));

  const players: Array<Player> = [];

  dataArray.players.forEach((player: Player) => {
    players.push(player);
  });

  return players;
}

export function calculateMedianPlayerHeight(players: Array<Player>) {
  // Declare heightPlayers to retrieve only players height in an array
  const heightPlayers: Array<number> = players.flatMap((value) => value.data.height);

  // Filtering the array
  const sortedHeightPlayers = heightPlayers.sort((a, b) => a - b);

  // Getting the middle value
  const middle = Math.floor(sortedHeightPlayers.length / 2);

  // Check if the middle is odd or even
  if (sortedHeightPlayers.length % 2 === 0) {
    return (sortedHeightPlayers[middle - 1] + sortedHeightPlayers[middle]) / 2;
  }

  // Return the value we want to display
  return sortedHeightPlayers[middle];
}

export function calculateAverageIMC(players: Array<Player>) {
  // Declare players imc array
  const imcPlayers: Array<number> = [];

  // Calculate IMC for players and push into array
  players.forEach((player) => {
    imcPlayers.push(
      (player.data.weight / 1000)
      / ((player.data.height / 100) * (player.data.height / 100)),
    );
  });

  // Return the caculated value we want to display
  return imcPlayers.reduce(
    (prev, current) => prev + current,
  ) / imcPlayers.length;
}

export function calculateGamesWinnerCountry(players: Array<Player>) {
  // Declare array of CountryWins custom object
  const winnersCountry: Array<CountryWins> = [];

  players.forEach((player) => {
    // Declare number of wins and number of games
    let numberOfWins = 0;
    let numberOfGames = 0;

    // Read data key in player model to increment number of wins and number of games
    player.data.last.forEach((game: number) => {
      if (game === 1) {
        numberOfWins += 1;
      }
      numberOfGames += 1;
    });

    // Check if the countryWins has already been added into the tab
    if (!winnersCountry.find(
      (countryWins) => countryWins.countryShortName === player.country.code,
    )) {
      // Add the countryWins object into the tab
      winnersCountry.push(
        new CountryWins(
          player.country.code,
          numberOfGames,
          numberOfWins,
          numberOfWins / numberOfGames,
        ),
      );
    } else {
      // Retrieve the countryWins which already exists into the tab to edit its values
      const countryWinsFound = winnersCountry.find(
        (countryWins) => countryWins.countryShortName === player.country.code,
      );

      // Check if the country is found
      if (countryWinsFound) {
        countryWinsFound.games += numberOfGames;
        countryWinsFound.wins += numberOfWins;
        countryWinsFound.ratio = countryWinsFound.wins / countryWinsFound.games;
      }
    }
  });

  // Get the max ratio country wins
  const maxRatioCountryWins = winnersCountry.reduce(
    (prev, current) => (
      (prev.ratio > current.ratio) ? prev : current),
  );

  // Return the value we want to display
  return {
    country: maxRatioCountryWins.countryShortName,
    ration: maxRatioCountryWins.ratio,
  };
}
