export default class CountryWins {
  /**
   * A model for data
   * @param countryShortName - name of the country (3 letters)
   * @param wins - number of wins
   * @param games - number of games
   * @param ratio - number of wins divided by number of games
   */

  constructor(
    public countryShortName: string,
    public games: number,
    public wins: number,
    public ratio: number,
  ) {
    this.countryShortName = countryShortName;
    this.games = games;
    this.wins = wins;
    this.ratio = ratio;
  }
}
