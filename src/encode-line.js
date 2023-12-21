const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = [];
  let count = 1;

  str.split("").forEach((char, i) => {
    if (char === str[i + 1]) {
      count++;
    } else {
      result.push(count > 1 ? count + char : char);
      count = 1; 
    }
  });
  return result.join("");
}

module.exports = {
  encodeLine
};
