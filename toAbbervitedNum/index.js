const toAbbreviated = (n)=> {
   if(n<1000) return n;
    const uniteK = n/1000;
    const uniteM = n/1000000;
    const uniteB = n/100000000;
    if(uniteK<1000){
        return uniteK+'K';
    }
    else if(uniteK>=1000 && uniteK<100000){
        return uniteM+'M';
    }
    return uniteB+'B'
}


console.log(toAbbreviated(1200))