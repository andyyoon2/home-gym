-- 2023-05-07
-- https://www.hackerrank.com/challenges/functional-programming-warmups-in-recursion---gcd/problem
gcd' :: Integral a => a -> a -> a
gcd' n m
    | n == m = n
    | n > m  = gcd' (n-m) m
    | n < m  = gcd' (m-n) n

-- https://www.hackerrank.com/challenges/functional-programming-warmups-in-recursion---fibonacci-numbers/problem
fib 0 = error "Invalid input"
fib 1 = 0
fib 2 = 1
fib n = fib (n-1) + fib (n-2)
