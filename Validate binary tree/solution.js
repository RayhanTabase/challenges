/*
link : https://leetcode.com/problems/validate-binary-search-tree/

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

*/


var isValidBST = function(root) {
function isBinary(node,smallest, largest) {
        if (!node) return true
        if (node.left && node.left.val >= node.val) {
           return false
        }
        if (node.right && node.right.val <= node.val) {
           return false
        }
        if (largest) {
            if (node.right && node.right.val >= largest) return false
        }
        if (smallest) {
            if (node.left && node.left.val <= smallest) return false
        }
        return isBinary(node.left, smallest , node.val  ) && isBinary(node.right, node.val , largest )
    }
    return isBinary(root,null, null)
};
