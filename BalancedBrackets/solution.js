

function isBalanced(s) {
    // Write your code here
    const openingB = ['{','[','(']
    const closingB = ['}',']',')']
    let stack = []
    let count = 0
    let isClosed = 'YES';
    for (var i= 0; i < s.length; i++){
        let currentB = s.charAt(i);
        if (closingB.includes(currentB)) {
            if (stack.length < 1 ) return 'NO';
            let currentOpening = stack.pop();
            let indexOfClosing = closingB.indexOf(currentB);
            if (currentOpening !== openingB[indexOfClosing]) return 'NO';
            count += 1;
        }
        else {
            stack.push(currentB);
        }
    }
    if (stack.length > 0) return 'NO'
    return isClosed;
}
