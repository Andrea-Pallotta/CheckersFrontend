class User {
  constructor(
    username,
    email,
    accessToken,
    socketId,
    wins,
    draws,
    losses,
    score,
    id
  ) {
    this.username = username;
    this.email = email;
    this.accessToken = accessToken;
    this.socketId = socketId;
    this.wins = wins;
    this.draws = draws;
    this.losses = losses;
    this.score = score;
    this.id = id;
  }

  setSocketId(socketId) {
    this.socketId = socketId;
  }

  setToken(accessToken) {
    this.accessToken = accessToken;
  }

  onlyCreds() {
    return {
      username: this.username,
      email: this.email,
    };
  }

  setScoreAndRecord(wins, draws, losses, score) {
    this.wins = wins;
    this.draws = draws;
    this.losses = losses;
    this.score = score;
  }

  static fromJSON(json) {
    return Object.assign(new User(), json);
  }
}

export default User;
