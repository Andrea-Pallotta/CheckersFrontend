class Message {
  constructor(sender, message, uuid, time) {
    this.sender = sender;
    this.message = message;
    this.uuid = uuid;
    this.time = time;
  }

  static fromJSON(json) {
    return Object.assign(new Message(), json);
  }
}

export default Message;
