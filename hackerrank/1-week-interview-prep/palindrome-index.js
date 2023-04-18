// 2023-04-18
// https://www.hackerrank.com/interview/preparation-kits/one-week-preparation-kit/one-week-day-three/challenges
/*
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function palindromeIndex(s) {
    let i = findPalindromeMismatch(s);
    if (i === -1) {
        return i;
    }
    while (i < s.length) {
        // Check if removing i would create palindrome
        let j = findPalindromeMismatch(s.substring(0, i) + s.substring(i+1));
        if (j === -1) {
            return i; // The original index found is a solution
        } else {
            // // Optimization if time: Try removing the other mismatch
            // let k = findPalindromeMismatch(s.substring(0, s.length-i-1) + s.substring(s.length-i));
            // if (k === -1) {
            //     return s.length-i-1;
            // }
            i++;
        }
    }
    // No solution
    return -1;
}
// abcd cacd cacde
// Returns the first index that doesn't match, or -1 if it is a palindrome
function findPalindromeMismatch(s) {
    for (let i = 0; i < Math.floor(s.length/2); i++) {
        if (s[i] !== s[s.length - i - 1]) {
            return i;
        }
    }
    return -1;
}

/*
BCR: O(n).. or O(n^2) (n iterations of checking strings of length O(n-1))
Naive:
Remove index 0, check if rest of the string is palindrome
Remove index 1, check again
Etc.
-> O(n^2)
isPalindrome = O(n/2)
n iterations = O(n*n/2) -> O(n^2)

Take 2
Sort string O(n log n)
Find the chars where charCount % 2 === 1
For each of those chars (n times)
    find in orig string O(n)
    check if palindrome without it O(n/2) -> O(n)
Still O(n^2)

If sorted, a palindrome will have all matching characters except maybe the middle one if odd length
So every character has a pair, except 1, so there can only be one char that has an odd count
If numOddCounts > 2, it is no solution

I don't have to sort I can use hash map
Iterate and populate counts in a map O(n)
Iterate map and find the odd counts O(n)
Find index of char in orig string, see if rest of string is palindrome O(n^2)
Still O(n^2) but better on average because we short circuit if we know there's no solution

It will only go O(n^2) on solution cases or there's a character to be removed but removing it doesn't
actually make a palindrome (the counts are right but ordering is wrong, aka it is an anagram of a palindrome)
*/

