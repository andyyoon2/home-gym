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
len (_:xs) = 1 + len xs

-- Update list with abs
-- https://www.hackerrank.com/challenges/fp-update-list/problem
absList :: [Int] -> [Int]
absList [] = []
absList (x:xs) = abs x : absList xs

-- Calc e^x
-- https://www.hackerrank.com/challenges/eval-ex/problem
eToX :: Double -> Double
eToX x = eExpansion x 10

eExpansion :: Double -> Int -> Double
eExpansion _ 0 = 1
eExpansion x i = x^i / fac + eExpansion x (i-1)
    where fac = fromIntegral (factorial i) :: Double

factorial :: Int -> Int
factorial neg
    | neg < 0 = error "Cannot get factorial of negative number"
factorial 0 = 1
factorial n = n * factorial (n-1)

-- https://www.hackerrank.com/challenges/eval-ex/forum/comments/1183250
eToX x = sum [ x**i / product [1..i] | i <- [0..9] ]
