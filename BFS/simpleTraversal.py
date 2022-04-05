/*

link : https://www.hackerrank.com/challenges/tree-height-of-a-binary-tree/problem
The height of a binary tree is the number of edges between the tree's root and its furthest leaf. For example, the following binary tree is of height :

image
Function Description

Complete the getHeight or height function in the editor. It must return the height of a binary tree as an integer.

getHeight or height has the following parameter(s):

root: a reference to the root of a binary tree.
Note -The Height of binary tree with single node is taken as zero.

Input Format

The first line contains an integer , the number of nodes in the tree.
Next line contains  space separated integer where th integer denotes node[i].data.

Note: Node values are inserted into a binary search tree before a reference to the tree's root node is passed to your function. In a binary search tree, all nodes on the left branch of a node are less than the node value. All values on the right branch are greater than the node value.

Constraints



Output Format

Your function should return a single integer denoting the height of the binary tree.
*/

def height(root):
    def findBreath (prevValue, node):
        # Check that the node can move to the next level
        if not node.left and not node.right :
            return prevValue;
        # Set its possible left or right traversal to False
        left = 0
        right = 0
        
        if node.left:
            left = findBreath(prevValue+1, node.left)
        if node.right:
            right = findBreath(prevValue+1, node.right)
            
            
        if(left > right):
            return left
        else:
            return right
    return findBreath(0,root)

