const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

 function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  const arrCopy = arr.length > 0 ? arr.concat() : arr;

  arr.forEach((el, index) => {
    let currentIndex = arrCopy.indexOf(el);
    switch (el) {
      case "--discard-next":
        arrCopy[index + 1]
          ? arrCopy.splice(index, 2, undefined)
          : arrCopy.splice(index, 1);
        return;
      case "--discard-prev":
        arrCopy[currentIndex - 1]
          ? arrCopy.splice(currentIndex - 1, 2, undefined)
          : arrCopy.splice(currentIndex, 1);
        return;
      case "--double-next":
        arrCopy[index + 1]
          ? arrCopy.splice(index, 1, arrCopy[index + 1])
          : arrCopy.splice(index, 1);
        return;
      case "--double-prev":
        arrCopy[currentIndex - 1]
          ? arrCopy.splice(currentIndex, 1, arrCopy[currentIndex - 1])
          : arrCopy.splice(currentIndex, 1);
        return;
      default:
        return;
    }
  });
  return arrCopy.filter((el) => el);
}
module.exports = {
  transform,
};
