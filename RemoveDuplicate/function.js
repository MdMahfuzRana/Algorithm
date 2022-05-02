/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports = function removeDuplicates(nums){
    var k= 1;
     var left = 0;
     for(let i=1;i<nums.length;i++){
         if(nums[left]!==nums[i]){
             left=i
             nums[k]=nums[i];
             k++;
         }
     }
     return k;
     
 };