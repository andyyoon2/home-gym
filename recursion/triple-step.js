// 2023-04-14 - 2023-04-15
// Crack the coding interview 8.1
function tripleStep(n) {
    // Init memo with base cases n = [0,2]
    return tripleMemo(n, [0, 1, 2]);
}

function tripleMemo(n, memo) {
    if (memo[n] !== undefined) {
        return memo[n];
    }
    memo[n] = tripleMemo(n - 1, memo) + tripleMemo(n - 2, memo) + tripleMemo(n - 3, memo);
    return memo[n];
}

