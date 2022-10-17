const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 */
function getSeason(date) {
  throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  // if (isNaN(Date.parse(date))) return "Unable to determine the time of year!";
  // let mounth = date.getMonth();
  // if (mounth === 2 || 3 || 4) return "spring";
  // if (mounth === 5 || 6 || 7) return "summer";
  // if (mounth === 8 || 9 || 10) return "autumn";
  // if (mounth === 11 || 0 || 1) return "winter";
}

module.exports = {
  getSeason,
};
