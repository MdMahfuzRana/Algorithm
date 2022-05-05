

const plusOne = function(digits) {
    let sum = BigInt(digits.join('')) + BigInt(1);
    return sum.toString().split('');
};

console.log(plusOne([1,2,3]))
