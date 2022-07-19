


const findHappy = (num) => {
    if(num===1)return true;
    if(num===4)return false;
    let strns = num.toString().split('');
    let numMultiply = null;
    strns?.forEach(str=>{
        let toNum = parseInt(str)
        numMultiply += toNum*toNum;
    })
    return findHappy(numMultiply);
}

console.log(findHappy(1))