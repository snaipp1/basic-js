const CustomError = require("../extensions/custom-error");

const transform = arr => {
    if(!Array.isArray(arr)) throw new Error();
        let result = [];
        for(let i = 0; i < arr.length; i++){
            switch(arr[i]){
              case '--double-next':
                if(i < arr.length - 1) result.push(arr[i + 1]);
                break;
            case '--double-prev':
                if(i > 0 && result[result.length - 1] !== 'discard') result.push(arr[i - 1]);
                break;
                case '--discard-next':
                    if(i < arr.length){
                        result.push('discard');
                        i++;
                    } 
                    break;
                case '--discard-prev':
                    if(result.length > 0 && result[result.length - 1] !== 'discard') result.splice(result.length - 1, 1);
                    break;
                default:
                    result.push(arr[i]);
            }
        } 
        return result.filter(item => item !== 'discard');  
  }



module.exports = transform;
