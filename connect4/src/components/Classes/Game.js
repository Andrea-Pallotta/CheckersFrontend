/**
 * Class model for games.
 *
 * @class Game
 */
class Game {
  /**
   * Creates an instance of Game.
   * @param {*} board
   * @param {*} player1
   * @param {*} player2
   * @param {*} turn
   * @param {*} move
   * @param {*} roomId
   * @param {*} message
   * @param {*} gameEnded
   * @param {*} winner
   * @memberof Game
   */
  constructor(
    board,
    player1,
    player2,
    turn,
    move,
    roomId,
    message,
    gameEnded,
    winner
  ) {
    this.board = board;
    this.player1 = player1;
    this.player2 = player2;
    this.turn = turn;
    this.move = move;
    this.roomId = roomId;
    this.message = message;
    this.gameEnded = gameEnded;
    this.winner = winner;
  }

  /**
   * Set game move.
   *
   * @param {JSON} move
   * @memberof Game
   */
  updateMove(move) {
    this.move = move;
  }

  /**
   * Set game message.
   *
   * @param {string} message
   * @memberof Game
   */
  updateMessage(message) {
    this.message = message;
  }

  /**
   * Set winner based on player that forfeited.
   *
   * @param {User} forfeiter
   * @memberof Game
   */
  setForfeit(forfeiter) {
    this.player1.username === forfeiter
      ? (this.winner = this.player2)
      : (this.winner = this.player1);
  }

  /**
   * Get the first board cell with a value of "0"
   *
   * @param {number} x
   * @return {number}
   * @memberof Game
   */
  getFirstOpenTile(x) {
    return this.board[x].lastIndexOf(0);
  }

  /**
   * Create a new instance of Game from a JSON object.
   *
   * @static
   * @param {JSON} json
   * @return {Game} 
   * @memberof Game
   */
  static fromJSON(json) {
    return Object.assign(new Game(), json);
  }
}

export default Game;
