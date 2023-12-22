const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.count = 1;
  }

  calculateDepth(arr) {
  throw new NotImplementedError("Not implemented");

    // if (arr.find((el) => Array.isArray(el))) {
    //   const flatArray = arr.flat();
    //   this.count += 1;
    //   this.calculateDepth(flatArray);
    // }
    // return this.count;
  }
}

module.exports = {
  DepthCalculator
};
