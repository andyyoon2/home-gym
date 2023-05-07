-- 2023-05-07
-- https://www.hackerrank.com/challenges/functional-programming-warmups-in-recursion---gcd/problem
gcd' :: Integral a => a -> a -> a
gcd' n m
    | n == m = n
    | n > m  = gcd' (n-m) m
    | n < m  = gcd' (m-n) n
