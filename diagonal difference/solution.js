/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = 1+5+9 = 15 . The right to left diagonal = 3+5+9 = 17 . Their absolute difference is |15 - 17| = 2 .

Function description

Complete the  function in the editor below.

diagonalDifference takes the following parameter:

int arr[n][m]: an array of integers
Return

int: the absolute diagonal difference

*/

function diagonalDifference(arr) {
    // Write your code here
    const lastIndex = arr.length - 1;
    var diagonal1 = 0
    var diagonal2 = 0
    var count = 0
    for (var i = 0; i < arr.length; i++) {
        diagonal1 += arr[i][count]
        diagonal2 += arr[i][lastIndex - i]
        count += 1
    }
    return Math.abs(diagonal2 - diagonal1)
}
