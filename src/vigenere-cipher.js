const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(direct) {
    this.direct = direct === undefined ? true : direct;
    this.symbols = 'abcdefghijklmnopqrstuvwxyz';
  }

  static cipher(message, key) {
    let index = 0;
    return [...message].reduce((accumulator, item) => {
      if (index > key.length - 1) index = 0;
      if (/[a-z]/.test(item)) {
        index++;
        return accumulator + key[index - 1];
      } else {
        return accumulator + item;
      }
    }, '');
  }

  encrypt(message, key) {
    message = message.toLowerCase();
    key = key.toLowerCase();
    const cipher = VigenereCipheringMachine.cipher(message, key);
    let encrypted = '';
    let value = 0;
    for(let i = 0; i <= cipher.length - 1; i++) {
      value = this.symbols.indexOf(message[i]) + this.symbols.indexOf(cipher[i]);
      if (value >= 26) value = Math.abs(value - 26);
      encrypted = (value >= 0) ? encrypted + this.symbols[value] : encrypted + message[i];
    }
    return this.direct ? encrypted.toUpperCase() : [...encrypted].map(item => item.toUpperCase()).reverse().join('');

  }
  decrypt(message, key) {
    message = message.toLowerCase();
    key = key.toLowerCase();
    const cipher = VigenereCipheringMachine.cipher(message, key);
    let decrypted = '';
    let value = 0;
    for (let i = 0; i <= cipher.length - 1; i++) {
      if (this.symbols.indexOf(message[i]) >= this.symbols.indexOf(cipher[i])) {
        value = (this.symbols.indexOf(cipher[i]) !== -1) ? this.symbols.indexOf(message[i]) - this.symbols.indexOf(cipher[i]) : -1;
      } else {
        value = this.symbols.indexOf(message[i]) + 26 - this.symbols.indexOf(cipher[i])
      }
      decrypted = (value >= 0) ? decrypted + this.symbols[value] : decrypted + message[i];
    }
    return this.direct ? decrypted.toUpperCase() : [...decrypted].map(item => item.toUpperCase()).reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
