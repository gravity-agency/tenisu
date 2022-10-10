export default class Country {
  /**
   * A model for country
   * @param picture - picture of the country
   * @param code - country code
   */

  constructor(
    public picture: string,
    public code: string,
  ) {
    this.picture = picture;
    this.code = code;
  }
}
