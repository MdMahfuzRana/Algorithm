const obj = require('./romanObject.js');

module.exports = function(s) {
    const roman = Array.from(s)
    let integer = 0;
    for(let i = 0; i < roman.length; i++){
      if(obj[roman[i]] < obj[roman[i+1]]){
        integer -= obj[roman[i]];
      }else{
        integer += obj[roman[i]];
      }
    }
    return integer;
 };