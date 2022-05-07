/**
 * @param {number} 
 * @return {number}
 */

const climbStairs1 = (n) => {
    if (n === 1) return 1;
    if (n === 2) return 2;
    return climbStairs1(n-1) + climbStairs1(n - 2);
}
climbStairs1(5)

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
        if (n === 1) return 1;
        if (n === 2) return 2;
   const steps = [];
   for(let i=0;i<=n;i++){ 
       let x = steps[i-1]? steps[i-1]:1;
       let y = steps[i-2]? steps[i-2]:0;
       if(i==0){
        steps.push(1)
       }
       if(i==1){
        steps.push(1)
       }
       if(i>1){
        steps.push(x+y)
       }
   }
   return steps.at(-1);
};

climbStairs(6)

