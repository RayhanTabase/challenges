class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(node) {
    //your code here 
    function insertAt(parentNode, childNode) {
      if(!parentNode || parentNode === null) return childNode;
      else if (childNode.data < parentNode.data ) parentNode.left = insertAt(parentNode.left, childNode)
      else if (childNode.data > parentNode.data ) parentNode.right = insertAt(parentNode.right, childNode)
      return parentNode
    }
    this.root = insertAt(this.root, node)
  }

  preOrder(node = this.root) {
    //implementation from the previous challenge
    if(!node) return [];
    let result = '';
    result += node.data + ' '
    result += this.preOrder(node.left)
    result += this.preOrder(node.right)
    return result
  }
}

function binarySearchTree(array) {
  const tree = new BST()
  array.forEach(e => tree.insert(new Node(e)))
  return tree.preOrder()
}

console.log(binarySearchTree([8, 3, 10, 1, 6, 14, 4, 7, 13]))
// => "8 3 1 6 4 7 10 14 13"

module.exports = binarySearchTree
