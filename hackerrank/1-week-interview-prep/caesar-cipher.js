// 2023-04-18
// https://www.hackerrank.com/challenges/one-week-preparation-kit-caesar-cipher-1/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-three
const CHAR_UPPER_A = 65;
const CHAR_UPPER_Z = 90;
const CHAR_LOWER_A = 97;
const CHAR_LOWER_Z = 122;

/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */
function caesarCipher(s, k) {
    // Assumes ASCII input s
    let result = '', nextChar;
    const rotate = k % 26;
    for (let i = 0; i < s.length; i++) {
        if (/[A-Z]/.test(s[i])) {
            nextChar = s.charCodeAt(i) + rotate;
            if (nextChar > CHAR_UPPER_Z) {
                nextChar -= 26;
            }
            result += String.fromCharCode(nextChar);
        } else if (/[a-z]/.test(s[i])) {
            nextChar = s.charCodeAt(i) + rotate;
            if (nextChar > CHAR_LOWER_Z) {
                nextChar -= 26;
            }
            result += String.fromCharCode(nextChar);
        } else {
            result += s[i];
        }
    }
    return result;
}

