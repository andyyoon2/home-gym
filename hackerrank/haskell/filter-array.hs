-- 2023-04-29
-- https://www.hackerrank.com/challenges/fp-filter-array/problem
f :: Int -> [Int] -> [Int]
f n arr = [ a | a <- arr, a < n ]

-- The Input/Output section. You do not need to change or modify this part
main = do 
    n <- readLn :: IO Int 
    inputdata <- getContents 
    let 
        numbers = map read (lines inputdata) :: [Int] 
    putStrLn . unlines $ (map show . f n) numbers
