import Country from '@/models/country';
import Data from '@/models/data';

export default class Player {
  /**
   * A model for player
   * @param id - id of the player
   * @param firstname - first name of the player
   * @param lastname - lastname of the player
   * @param shortname - shortname of the player
   * @param sex - gender of the player
   * @param country - country where the player is born
   * @param picture - picture of the player
   * @param data - current data of the player
   */

  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public shortname: string,
    public sex: string,
    public country: Country,
    public picture: string,
    public data: Data,
  ) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.shortname = shortname;
    this.sex = sex;
    this.country = country;
    this.picture = picture;
    this.data = data;
  }
}
