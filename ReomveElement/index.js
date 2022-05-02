/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    const len = nums.length;
     for(let i=0;i<len;i++){
         const elmnt = nums.shift()
         if(elmnt!==val){
             nums.push(elmnt)
         }
     }
    return len;
 };