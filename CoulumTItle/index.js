
var convertToTitle = function(n) {
    const string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = [];
    while(n>0){
        if(n%26===0){
            result.push(string.charAt(26-1))
            n = Math.floor(n/26)-1
        }else{
            result.push(string.charAt(Math.floor(n%26)-1))
            n = Math.floor(n/26)
        }
    }
    return result.reverse().join('')
};
console.log(convertToTitle(18279))