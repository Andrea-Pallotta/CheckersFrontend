class Response {
  constructor(data, code) {
    this.data = data;
    this.code = code;
  }

  static fromJSON(json) {
    return Object.assign(new Response(), json);
  }
}

export default Response;
