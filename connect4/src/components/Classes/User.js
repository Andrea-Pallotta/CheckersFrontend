/**
 * Class model for users.
 *
 * @class User
 */
class User {
  /**
   * Creates an instance of User.
   * @param {*} username
   * @param {*} socketId
   * @param {*} email
   * @param {*} accessToken
   * @param {*} wins
   * @param {*} draws
   * @param {*} losses
   * @param {*} score
   * @param {*} id
   * @param {*} activeGame
   * @memberof User
   */
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

  /**
   * Set new socket id.
   *
   * @param {string} socketId
   * @memberof User
   */
  setSocketId(socketId) {
    this.socketId = socketId;
  }

  /**
   * Set new JWT.
   *
   * @param {JSON} accessToken
   * @memberof User
   */
  setToken(accessToken) {
    this.accessToken = accessToken;
  }

  /**
   * Return username and email
   *
   * @return {JSON}
   * @memberof User
   */
  onlyCreds() {
    return {
      username: this.username,
      email: this.email,
    };
  }

  /**
   * Set Score and Record received from server.
   *
   * @param {number} wins
   * @param {number} draws
   * @param {number} losses
   * @param {number} score
   * @memberof User
   */
  setScoreAndRecord(wins, draws, losses, score) {
    this.wins = wins;
    this.draws = draws;
    this.losses = losses;
    this.score = score;
  }

  /**
   * Create a new instance of User from a JSON object.
   *
   * @static
   * @param {JSON} json
   * @return {User}
   * @memberof User
   */
  static fromJSON(json) {
    return Object.assign(new User(), json);
  }
}

export default User;
