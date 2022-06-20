



var isPalindrome = function(s) {

    let string = s.replace(/[^0-9a-z]/gi, "").trim().toLowerCase()
        string = string.split("").join("")
    let reversed = [...string].reverse().join("")
    return reversed || string;
};

console.log(isPalindrome("race a car"))