/**
 * Class that handles HTTP response codes.
 *
 * @class Response
 */
class Response {
  /**
   * Creates an instance of Response.
   * @param {*} data
   * @param {*} code
   * @memberof Response
   */
  constructor(data, code) {
    this.data = data;
    this.code = code;
  }

  /**
   * Create a new instance of Response from a JSON object.
   *
   * @static
   * @param {JSON} json
   * @return {Response}
   * @memberof Response
   */
  static fromJSON(json) {
    return Object.assign(new Response(), json);
  }
}

export default Response;
