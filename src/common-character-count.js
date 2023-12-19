const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  const splittedS1 = s1.split("");
  const splittedS2 = s2.split("");

  splittedS1.map((char) => {
    if (splittedS2.includes(char)) {
      counter = counter + 1;
      const indexToRemove = splittedS2.indexOf(char);
      if (indexToRemove > -1) {
        splittedS2.splice(indexToRemove, 1);
      }
      console.log(splittedS2);
    }
  });
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
