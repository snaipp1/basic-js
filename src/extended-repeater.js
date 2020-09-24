const CustomError = require("../extensions/custom-error");

const repeater = (str, options) => {
  const repeatTimes = Number.isInteger(options.repeatTimes) ? options.repeatTimes : 1;
  const additionRepeatTimes = Number.isInteger(options.additionRepeatTimes) ? options.additionRepeatTimes : 1;
  const separator = options.separator ? options.separator: '+';
  const additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  const addition = (options.addition !== undefined) ? '' + options.addition : '';
  let arrStr = new Array(repeatTimes);
  let arrAddition = new Array(additionRepeatTimes);
  return arrStr.fill(str + arrAddition.fill(addition).join(additionSeparator)).join(separator);
};

module.exports = repeater;
  