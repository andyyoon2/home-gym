// 2023-04-21
// https://leetcode.com/problems/valid-parentheses/submissions/937484412/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  for (let c of s) {
    // Open bracket, push onto stack
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c);
      continue;
    }
    // Close bracket, validate stack contents
    if (c === ')') {
      if (stack.pop() !== '(') {
        return false;
      }
    } else if (c === ']') {
      if (stack.pop() !== '[') {
        return false;
      }
    } else if (c === '}') {
      if (stack.pop() !== '{') {
        return false;
      }
    }
  }
  if (stack.length > 0) {
    // Didn't match all opening brackets
    return false;
  }
  return true;
};
