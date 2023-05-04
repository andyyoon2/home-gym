-- 2023-05-04
-- Reverse list
-- https://www.hackerrank.com/challenges/fp-reverse-a-list/problem?isFullScreen=true
rev :: (Num a) => [a] -> [a]
rev [] = []
rev (x:xs) = rev xs ++ [x]
