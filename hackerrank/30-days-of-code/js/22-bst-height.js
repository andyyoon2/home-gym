// 2023-04-27
// https://www.hackerrank.com/challenges/30-binary-search-trees/problem?utm_campaign=30_days_of_code_continuous&utm_medium=email&utm_source=daily_reminder
this.getHeight = function(root) {
    if (!root) {
        return 0;
    }
    const left = root.left ? 1+this.getHeight(root.left) : 0;
    const right = root.right ? 1+this.getHeight(root.right) : 0;
    return Math.max(left, right);
};
