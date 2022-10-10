export default class Data {
  /**
   * A model for data
   * @param rank - current ATP rank of the player
   * @param points - number of points of the player
   * @param weight - weight of the player
   * @param height - height of the player
   * @param age - age of the player
   * @param last - Array of the last games played (0 : lost, 1: won)
   */

  constructor(
    public rank: number,
    public points: number,
    public weight: number,
    public height: number,
    public age: number,
    public last: Array<number>,
  ) {
    this.rank = rank;
    this.points = points;
    this.weight = weight;
    this.height = height;
    this.age = age;
    this.last = last;
  }
}
