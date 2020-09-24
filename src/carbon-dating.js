const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

const dateSample = sampleActivity => {
  if (typeof sampleActivity === "string") {
    let value = +(sampleActivity);
    if (value > 0 && value <= MODERN_ACTIVITY) {
      const k = 0.693 / HALF_LIFE_PERIOD;
      const time = Math.log(MODERN_ACTIVITY / value) / k;
      return Math.ceil(time);
    }
  }
  return false;
};


module.exports = dateSample;
