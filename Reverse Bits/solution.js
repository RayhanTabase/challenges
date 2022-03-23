/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    // convert the number into binary and reverse it
    let reverse = n.toString(2).split('').reverse().join('');
    
    //add 0 to the end of the string until its length is == 30
    
    // console.log(reverse, reverse.padEnd(32, '0'))
    // let answer = parseInt(reverse.padEnd(32, '0'), 2)
    // return answer
    
    while (reverse.length < 32) reverse += '0' 
    
    // convert into an integer, the second parameter (radix) ensures it converts from binary
    return parseInt(reverse,2)
    
};
