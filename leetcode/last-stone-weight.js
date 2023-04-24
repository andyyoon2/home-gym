// 2023-04-24
// https://leetcode.com/problems/last-stone-weight/submissions/939162878/
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    if (stones.length === 1) {
        return stones[0];
    }
    stones.sort((a, b) => a < b ? -1 : 1);
    let x, y, z, i = 0;
    while (stones.length > 1) {
        x = stones.pop();
        y = stones.pop();
        if (x === y) {
            continue;
        } else {
            z = Math.abs(x - y);
            // Insert in correct place
            while (i < stones.length) {
                if (stones[i] > z) {
                    stones = [...stones.slice(0,i), z, ...stones.slice(i)];
                    break;
                }
                i++;
            }
            if (i === stones.length) {
                stones.push(z);
            }
            i = 0;
        }
    }
    return stones[0] ? stones[0] : 0;
};
