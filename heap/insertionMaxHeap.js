/*
Insert into a Max heap, making sure the parent elements is larger than its child elements
*/

var MaxHeap = function() {
  // Only change code below this line
  this.heap = [];
  let findParent = (index) => Math.floor((index - 1)/2);
  let findLeftChild = (index) => index * 2;
  let findRightChild = (index) => index * 2 + 1;
  
  this.print = () => this.heap

  this.insert = (val) => {
    this.heap.push(val);
    let index = this.heap.length - 1;
    //  bubble higher values to the top
    while (index > 0 && this.heap[index] > this.heap[findParent(index)]) {
      console.log(index, findParent(index))
      console.log(this.heap[index],this.heap[findParent(index)])
      let temp = this.heap[findParent(index)];
      this.heap[findParent(index)] = this.heap[index] ;
      this.heap[index] = temp;
      index = findParent(index);
    } 
  }
  // Only change code above this line
};
