var isSymmetric = function(root) {
    if(!root.left && !root.right){ return true; }
    return out(root.left,root.right);
    
   function out(root1,root2){
     if(!root1 && !root2){ return true; }
     if(!root1 || !root2 || root1.val!==root2.val){ return false; }
     return out(root1.left,root2.right) && out(root1.right,root2.left);
   }
 };  


 isSymmetric([1,2,2,3,4,4,3])
 