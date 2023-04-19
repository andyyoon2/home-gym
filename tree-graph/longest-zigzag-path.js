// 2023-04-19
// https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/submissions/936495347/
// https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/editorial/
let pathLength;

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function(root) {
    pathLength = 0;
    longestZZHelper(root, true, 0);
    longestZZHelper(root, false, 0);
    return pathLength;
};

function longestZZHelper(root, goLeft, currPathLength) {
    if (!root) {
        return 0;
    }
    pathLength = Math.max(pathLength, currPathLength);
    if (goLeft) {
        longestZZHelper(root.left, false, 1 + currPathLength);
        longestZZHelper(root.right, true, 1);
    } else {
        longestZZHelper(root.right, true, 1 + currPathLength);
        longestZZHelper(root.left, false, 1);
    }
}
