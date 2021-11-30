class Game {
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

  updateMove(move) {
    this.move = move;
  }

  updateMessage(message) {
    this.message = message;
  }

  setForfeit(forfeiter) {
    this.player1.username === forfeiter
      ? (this.winner = this.player2)
      : (this.winner = this.player1);
  }

  getFirstOpenTile(x) {
    return this.board[x].lastIndexOf(0);
  }

  static fromJSON(json) {
    return Object.assign(new Game(), json);
  }
}

export default Game;
