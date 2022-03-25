/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    let root = null
    if(root1 && root2){
        root = root1
        root.val += root2.val
        root.left = mergeTrees(root1.left, root2.left)
        root.right = mergeTrees(root1.right, root2.right)
    }
        
    else if(root1){
        root = root1
        root.left = mergeTrees(root1.left, null)
        root.right = mergeTrees(root1.right, null)
    }
    else if(root2){
        root = root2
        root.left = mergeTrees(null, root2.left)
        root.right = mergeTrees(null, root2.right)
    }
    else {
        return null
    }
        
    return root
};
