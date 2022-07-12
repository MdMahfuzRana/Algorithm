var majorityElement = function(nums) {
    let sortedArr = nums.sort()
    return sortedArr[Math.floor(sortedArr.length/2)]
};
console.log(majorityElement([2,2,1,1,1,2,2]))