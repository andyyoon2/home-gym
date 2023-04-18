// 2023-04-18
// https://www.hackerrank.com/interview/preparation-kits/one-week-preparation-kit/one-week-day-three/challenges
/*
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function palindromeIndex(s) {
    if (isPalindrome(s)) {
        return -1;
    }
    // Get counts of each char in s
    const map = new Map();
    for (let char of s) {
        if (map.get(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }
    // Check which chars need to be checked
    const charsToCheck = [];
    for (const [char, count] of map) {
        if (count % 2 === 1) {
            charsToCheck.push(char);
        }
    }
    if (charsToCheck.length > 2) {
        // No possible solution
        return -1;
    }
    // Check palindromes removing each character
    let i;
    for (let c of charsToCheck) {
        i = 0;
        while (i < s.length) {
            i = s.indexOf(c, i);
            if (i === -1) {
                break;
            }
            if (isPalindrome(s.substring(0, i) + s.substring(i+1))) {
                return i;
            }
            i++;
        }
    }
    return -1;
}

function isPalindrome(s) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[s.length - i - 1]) {
            return false;
        }
    }
    return true;
}

