var singleNumber = function(nums) {

    let sorted = nums.sort((a,b) => a-b)
    for(var i=0;i<sorted.length;i++){
        if(sorted[i]===sorted[i+1]){
            i++;
        }
        else if(sorted[i] && sorted[i+1]===null ){
            return sorted[i];
        }
        else{
            return sorted[i];
        }
    }
    
};

console.log(singleNumber([4,1,2,1,2]))