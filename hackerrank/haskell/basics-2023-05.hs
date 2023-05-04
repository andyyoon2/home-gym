-- 2023-05-04
-- Reverse list
-- https://www.hackerrank.com/challenges/fp-reverse-a-list/problem?isFullScreen=true
rev :: (Num a) => [a] -> [a]
rev [] = []
rev (x:xs) = rev xs ++ [x]

-- Sum of odd elements
-- https://www.hackerrank.com/challenges/fp-sum-of-odd-elements/problem
sumOdd :: [Int] -> Int
sumOdd [] = 0
sumOdd (x:xs)
    | x `mod` 2 == 1 = x + sumOdd xs
    | otherwise      = sumOdd xs

-- List length
-- https://www.hackerrank.com/challenges/fp-list-length/problem
len :: [a] -> Int
len [] = 0
len (x:xs) = 1 + len xs
