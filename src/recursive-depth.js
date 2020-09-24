const CustomError = require("../extensions/custom-error");

class DepthCalculator {
  calculateDepth(arr) {
    return arr.reduce((accumulator, item) => {
      let depth = 1;
      if(Array.isArray(item)) depth += this.calculateDepth(item);
      return accumulator > depth ? accumulator : depth;
    },1);    
  }
};


module.exports = DepthCalculator;