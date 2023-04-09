/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new score board with an initial entry.
 *
 * @returns {Record<string, number>} new score board
 */
export function createScoreBoard() {
  const object = {
    "The Best Ever": 1000000,
  };

  return object;
}

/**
 * Adds a player to a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Record<string, number>} updated score board
 */
export function addPlayer(scoreBoard, player, score) {
  // console.log(scoreBoard);
  scoreBoard[player] = score;
  // console.log(scoreBoard);
  return scoreBoard;
}

console.log(addPlayer({ "Dave Thomas": 0 }, "José Valim", 486373));

/**
 * Removes a player from a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @returns {Record<string, number>} updated score board
 */
export function removePlayer(scoreBoard, player) {
  delete scoreBoard[player];
  return scoreBoard;
}

console.log(removePlayer({ "Dave Thomas": 0 }, "Rose Fanaras"));

/**
 * Increases a player's score by the given amount.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Record<string, number>} updated score board
 */
export function updateScore(scoreBoard, player, points) {
  // console.log(scoreBoard);
  scoreBoard[player] += points;
  // console.log(scoreBoard);

  return scoreBoard;
}

console.log(updateScore({ "Freyja Ćirić": 12771008 }, "Freyja Ćirić", 73));
/**
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Record<string, number>} scoreBoard
 * @returns {Record<string, number>} updated score board
 */

// const scoreBoard = {
//   "Dave Thomas": 44,
//   "Freyja Ćirić": 539,
//   "José Valim": 265,
// };
export function applyMondayBonus(scoreBoard) {
  for (const player in scoreBoard) {
    if (scoreBoard.hasOwnProperty(player)) {
      // Add 100 to the score of players on Mondays
      scoreBoard[player] += 100;
    }
  }

  return scoreBoard;
}
// applyMondayBonus(scoreBoard);
/**
 * Normalizes a score with the provided normalization function.
 *
 * @param {Params} params the parameters for performing the normalization
 * @returns {number} normalized score
 */

export function normalizeScore(params) {
  const { score, normalizeFunction } = params;

  return normalizeFunction(score);
}
