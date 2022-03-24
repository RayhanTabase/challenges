/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let leftSum = 0
    if(root.left){
        if(root.left.left === null && root.left.right === null) leftSum += root.left.val;
        else leftSum += sumOfLeftLeaves(root.left)
    }
    if(root.right){
        leftSum += sumOfLeftLeaves(root.right)
    }
    return leftSum
};
