const CustomError = require("../extensions/custom-error");

const countCats = backyard => {
  let count = 0;
  for(let item of backyard){
      for(let cat of item){
          if(cat === '^^')
          count++;
      }
  }
  return count;
};

module.exports = countCats;
