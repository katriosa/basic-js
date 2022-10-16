const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let nameArr = [];

  members && members.length > 0 &&
    members.forEach((member) => {
      if (typeof member === "string") {
        nameArr.push(member.replaceAll(' ', '')[0].toUpperCase());
      }
    });
  return nameArr.length > 0 ? nameArr.sort().join("") : false;
}

module.exports = {
  createDreamTeam,
};
