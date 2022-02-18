// Link to problem https://www.hackerrank.com/challenges/one-week-preparation-kit-time-conversion/problem

/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example

s ='12:01:00PM'
Return '12:01:00'.

s ='12:01:00AM'
Return '00:01:00'.

*/

// Alternate approach https://github.com/KingsleyIbe/convert-time-string-challenge/commit/41e995e1c9492a7310c6e88545ee6ac1e5ff666d


function timeConversion(s) {
    // Write your code here
    var stringDigits = s.replace(/[a-zA-Z]/gi,'');
    var digits = stringDigits.split(':');
    if (s.includes('AM')) {
        let value = parseInt(digits[0]);
        if (value === 12) digits[0] = '00';
    }
    if (s.includes('PM')) {
        let value = parseInt(digits[0]);
        if (value !== 12) {
            digits[0] = `${12 + value}`
        }
    }
    return digits.join(':');
}
