/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 const searchInsrtPosition = function(nums, val) {
    const result = null;
    if(nums.length === 0) return 0;
    if(nums.includes(val)){
        return nums.indexOf(val);
    }
    else{
        nums.push(val);
        nums.sort((a,b) => a-b);
        return nums.indexOf(val);
    }
}