// 2023-04-28
// https://www.hackerrank.com/challenges/30-binary-trees/problem?isFullScreen=true
this.levelOrder = function(root) {
    if (!root) {
        return;
    }
    const nodes = [root];
    let node;
    while (nodes.length > 0) {
        node = nodes.shift();
        if (node.left) {
            nodes.push(node.left);
        }
        if (node.right) {
            nodes.push(node.right);
        }
        process.stdout.write(node.data + ' ');
    }
};
