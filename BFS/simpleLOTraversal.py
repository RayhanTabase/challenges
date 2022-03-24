/*

Link to challenge : https://www.hackerrank.com/challenges/tree-level-order-traversal/problem
Given a pointer to the root of a binary tree, you need to print the level order traversal of this tree. In level-order traversal, nodes are visited level by level from left to right. Complete the function  and print the values in a single line separated by a space.

For example:

     1
      \
       2
        \
         5
        /  \
       3    6
        \
         4  
        
output -> 1 2 5 3 6 4

Output Format

Print the values in a single line separated by a space.

*/


def levelOrder(root):
    #Write code Here
    answer = ''
    queue = [root]
    
    while len(queue) > 0:
        currentNode = queue.pop(0);
        answer += str(currentNode.info) + ' '
        if(currentNode.left):
            queue.append(currentNode.left)
        if(currentNode.right):
            queue.append(currentNode.right)
            
    print(answer.strip()) 
