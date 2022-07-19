

const toUppercase = (sen) => {
    if(!sen) return;
    let string = sen.trim().split(' ')
    let newStrng = []
    string.forEach(stg=>{
        newStrng.push(stg.charAt(0).toUpperCase() + stg.slice(1))
    })
    return newStrng.join(' ');
}

console.log(toUppercase('Write a function that takes in a sentence as its argume'))