/*
Julius Caesar protected his confidential information by encrypting it using a cipher.
Caesar's cipher shifts each letter by a number of letters.
If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. 
In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.
*/



function caesarCipher(s, k) {
    // Write your code here
    const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const lengthAlph = alphabets.length;
    let encryptedString = '';
    for ( var i = 0; i < s.length; i++ ) {
        let value = s.charAt(i);
        if ( value.match(/[a-zA-Z]/) === null ) {
            encryptedString += value;
            continue;
        };
        let index = alphabets.indexOf(value.toLowerCase());
        let j = k;
        index += k
        if (index >= lengthAlph) index = index % lengthAlph
        value.toUpperCase() === value ? 
            encryptedString += alphabets[index].toUpperCase()
            :
            encryptedString += alphabets[index]
    }
    return encryptedString
}
