
/*
Link : https://www.hackerrank.com/challenges/diagonal-difference/problem
Given a square matrix, calculate the absolute difference between the sums of its diagonals.
*/

function diagonalDifference(arr) {
    // Write your code here
    let diagonalSum1 = 0;
    let diagonalSum2 = 0;
    let lastIndex = arr.length -1;
    let count = 0;
    
    for (var i = 0; i < arr.length; i++) {
        diagonalSum1 += arr[i][count];
        diagonalSum2 += arr[i][arr.length -1 - count];
        count += 1;
    }
    return Math.abs(diagonalSum1 - diagonalSum2);
}
