class User {
  constructor(
    username,
    socketId,
    email,
    accessToken,
    wins,
    draws,
    losses,
    score,
    id,
    activeGame
  ) {
    this.username = username;
    this.socketId = socketId;
    this.email = email;
    this.accessToken = accessToken;
    this.wins = wins;
    this.draws = draws;
    this.losses = losses;
    this.score = score;
    this.id = id;
    this.activeGame = activeGame;
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
