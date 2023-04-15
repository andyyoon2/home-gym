// 2023-04-15
// https://leetcode.com/problems/course-schedule/submissions/934367556/
// https://leetcode.com/problems/course-schedule/solutions/58586/python-20-lines-dfs-solution-sharing-with-explanation/
// https://leetcode.com/problems/course-schedule/solutions/58509/c-bfs-dfs/
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // Build our graph
    const nodes = [];
    const visited = [];
    for (let prereq of prerequisites) {
        if (nodes[prereq[0]]) {
            nodes[prereq[0]].push(prereq[1]);
        } else {
            nodes[prereq[0]] = [prereq[1]];
        }
    }
    // Check for cycles
    for (let i = 0; i < nodes.length; i++) {
        if (!nodes[i] || visited[nodes[i]] === 1) {
            continue;
        }
        if (!hasNoCycles(i, nodes, visited)) {
            return false;
        }
    }
    return true;
};

// Mark a visited node as 1 and
// a currently checking node as -1
// If we run into a -1 then we have found a cycle
function hasNoCycles(i, nodes, visited) {
    if (visited[nodes[i]] === -1) {
        return false;
    }
    if (!nodes[i] || visited[nodes[i]] === 1) {
        return true;
    }
    visited[nodes[i]] = -1;
    for (child of nodes[i]) {
        if (!hasNoCycles(child, nodes, visited)) {
            return false;
        }
    }
    visited[nodes[i]] = 1;
    return true;
}

