
var preorderTraversal = function(root) {
    if(!root) return []
    var result = [];
    var traversal=(node)=>{
        result.push(node.val)
        if(node.right) traversal(node.right);
        if(node.left) traversal(node.left);
    }
    traversal(root)
    return result;
};

preorderTraversal([1,null,2,3])

