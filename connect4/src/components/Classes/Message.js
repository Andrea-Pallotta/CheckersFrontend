/**
 * Class model for chat messages.
 *
 * @class Message
 */
class Message {
  /**
   * Creates an instance of Message.
   * @param {*} sender
   * @param {*} message
   * @param {*} uuid
   * @param {*} time
   * @memberof Message
   */
  constructor(sender, message, uuid, time) {
    this.sender = sender;
    this.message = message;
    this.uuid = uuid;
    this.time = time;
  }

  /**
   * Create a new instance of Message from a JSON object.
   *
   * @static
   * @param {JSON} json
   * @return {Message}
   * @memberof Message
   */
  static fromJSON(json) {
    return Object.assign(new Message(), json);
  }
}

export default Message;
