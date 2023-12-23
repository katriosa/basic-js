const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const result = [];

  for (let i = 0; i < rows; i++) {
    result.push([]);
    for (let j = 0; j < cols; j++) {
      let count = 0;

      for (let ni = i - 1; ni <= i + 1; ni++) {
        for (let nj = j - 1; nj <= j + 1; nj++) {
          if (ni >= 0 && ni < rows && nj >= 0 && nj < cols && !(ni === i && nj === j)) {
            count += matrix[ni][nj] ? 1 : 0;
          }
        }
      }

      result[i].push(count);
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
