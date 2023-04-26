// 2023-04-26
// https://leetcode.com/problems/add-digits/submissions/940283112/
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num < 10) {
        return num;
    }
    let result = 0;
    while (num >= 10) {
        result += num % 10;
        num = Math.floor(num / 10);
    }
    result += num;
    return addDigits(result);
};
