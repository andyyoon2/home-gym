// 2023-04-21
// https://leetcode.com/problems/removing-stars-from-a-string/submissions/937503112/
/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    for (let i = 1; i < s.length; i++) {
        if (s[i] === '*') {
            s = s.substring(0, i-1) + s.substring(i+1);
            i -= 2;
        }
    }
    return s;
}
// var removeStars = function(s) {
//     // Keep track of each slice
//     let start = 0, end = 0, seeingStars = false;
//     const slices = [];
//     for (let i = 1; i < s.length; i++) {
//         if (s[i] === '*') {
//             // Don't include the star/letter in the output
//             end--;
//             seeingStars = true;
//         } else {
//             if (seeingStars) {
//                 // Done with this star string; save the operation and reset
//                 slices.push(s.slice(start, end+1));
//                 start = i;
//                 end = i;
//             } else {
//                 // This letter will be included in the output
//                 end++;
//             }
//         }
//     }
//     // Add on any remaining letters
//     if (end === s.length - 1) {
//         slices.push(s.slice(start, end+1));
//     }
//     return slices.join('');
// };
