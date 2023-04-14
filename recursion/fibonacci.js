// 2023-04-14
// Crack the Coding Interview Chapter 8

// Naive - O(2^n)!
// For every recursive call (n), 2 branches made
function fibonacci_naive(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  return fibonacci_naive(n - 1) + fibonacci_naive(n - 2);
}

// Using dynamic programming
function fibonacci_memo(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  const memo = [0, 1];
  for (let i = 2; i < n; i++) {
    memo.push(memo[i - 1] + memo[i - 2]);
  }
  return memo[n - 1] + memo[n - 2];
}

// We can remove the array and just use a few vars, because
// we don't need to store the previous iterations anymore
function fibonacci_memo2(n) {
  if (n === 0) {
    return 0;
  }
  let a = 0, b = 1, c;
  for (let i = 2; i < n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return a + b;
}

