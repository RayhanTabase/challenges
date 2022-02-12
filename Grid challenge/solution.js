/*Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending.
Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.

Example
grid = ['abc','ade','efg']
The grid is illustrated below.
a b c
a d e
e f g
*/

function gridChallenge(grid) {
    // Write your code here
    let sortedGrid = grid.forEach((element,index) => {
        let array = element.split('').sort().join('');
        grid[index] = array
    })
    for (var count = 0; count < grid[0].length ; count++) {
        let currentCode = grid[0].charCodeAt(count);
        for(var i = count; i < grid.length; i++) {
            let nextCode = grid[i].charCodeAt(count)
            if (currentCode <= nextCode) currentCode = nextCode;
            else return 'NO';
        }
    }
    return 'YES';
}
