// 2023-05-06
// https://leetcode.com/problems/evaluate-reverse-polish-notation/submissions/945720232/
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    let o1, o2, result;
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '+') {
            o2 = stack.pop();
            o1 = stack.pop();
            result = o1 + o2;
            stack.push(result);
        } else if (tokens[i] === '-') {
            o2 = stack.pop();
            o1 = stack.pop();
            result = o1 - o2;
            stack.push(result);
        } else if (tokens[i] === '*') {
            o2 = stack.pop();
            o1 = stack.pop();
            result = o1 * o2;
            stack.push(result);
        } else if (tokens[i] === '/') {
            o2 = stack.pop();
            o1 = stack.pop();
            result = Math.trunc(o1 / o2);
            stack.push(result);
        } else {
            stack.push(parseInt(tokens[i], 10));
        }
    }
    return stack[0];
};
