const CustomError = require("../extensions/custom-error");

const calculateHanoi = (diskNumber, turnsSpeed) => {
  const turns = 2 ** diskNumber - 1;
  const seconds = Math.floor(turns/(turnsSpeed/3600));
  return {turns, seconds};
};

module.exports = calculateHanoi;
