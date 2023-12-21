const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeat = options.repeatTimes && options.repeatTimes > 1 ? options.repeatTimes : false;

  const repeatAddition =
    options.additionRepeatTimes && options.additionRepeatTimes > 1
      ? options.additionRepeatTimes
      : false;

  let separator = options.separator ? options.separator : "+";
  if (options.repeatTimes === 1 || !options.repeatTimes) {
    separator = "";
  }

  let additionSeparator = options.additionSeparator
    ? options.additionSeparator
    : "|";
  
  let addition = options.addition || options.addition === false || options.addition === null? options.addition : "";

  const resultAddition = repeatAddition
    ? (addition + additionSeparator).repeat(repeatAddition-1) + addition
    : addition;

  console.log(resultAddition, separator, repeat);

  const result = () => {
    if (!addition && !repeatAddition && repeat) {
      return (str + separator).repeat(repeat - 1) + str;
    }
    if (repeat) {
      return (
        (str + resultAddition + separator).repeat(repeat - 1) +
        (options.repeatTimes > 1 ? str : "") +
        resultAddition
      );
    }
    return str + resultAddition;
  };
  return result();
}

module.exports = {
  repeater
};
