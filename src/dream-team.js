const CustomError = require("../extensions/custom-error");

const createDreamTeam = arr =>{
  if(!Array.isArray(arr)) return false;
  const members = arr.filter(item => typeof item === 'string');
  
  return members.length > 1 ? members.map(item=> item.trim()[0].toUpperCase()).sort().join('') : false;
}


module.exports = createDreamTeam;
