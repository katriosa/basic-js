const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const transformToArr = (num) => {
    return num.toString().split("").map(Number);
  };

  const getSum = (arr) => {
    console.log(arr.reduce((acc, cur) => acc + cur, 0));

    return arr.reduce((acc, cur) => acc + cur, 0);
  };

  const array = transformToArr(n);
  const result = getSum(array);

  if (result >= 10) {
    return getSumOfDigits(result);
  }

  return result;
}

module.exports = {
  getSumOfDigits
};
