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
var getMinimumDifference = function(root) {
    const trav=(root)=>{
        if(root === null) return [];
        return [...trav(root.left), root.val, ...trav(root.right)]
    }
    const array = trav(root)
    let min = null
    for(let i =0; i< array.length -1; i++){
        let newMin = Math.abs(array[i] - array[i+1])
        if(min === null) min = newMin
        else {
            if (newMin < min) min = newMin
        }
    }
    return min
};

// can be improved by working withing the tree traversal instead of returning an array, to achieve time complexity of On instead of 0n**2
