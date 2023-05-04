-- 2023-05-04
-- Reverse list
-- https://www.hackerrank.com/challenges/fp-reverse-a-list/problem?isFullScreen=true
rev :: (Num a) => [a] -> [a]
rev [] = []
rev (x:xs) = rev xs ++ [x]

-- Sum of odd elements
-- https://www.hackerrank.com/challenges/fp-sum-of-odd-elements/problem
f :: [Int] -> Int
f [] = 0
f (x:xs)
    | x `mod` 2 == 1 = x + f xs
    | otherwise      = f xs
