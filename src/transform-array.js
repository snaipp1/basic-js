const CustomError = require("../extensions/custom-error");

const transform = () => {
    throw new CustomError('Not implemented');
}



module.exports = transform;
