/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function (strs) {
    let ans = strs[0];
    // pointer to check for mismatch
    let p = 0;
    for (let i = 1; i < strs.length; i++) {
      // if the pointer point at undefined (out of index), stop 
      while (ans[p] !== undefined || strs[i][p] !== undefined) {
        if (ans[p] !== strs[i][p]) {
          ans = ans.substring(0, p);
        }
        p++;
      }
      // set the pointer to the beginning after finish checking current string
      p = 0;
    }
    return ans;
  };
  