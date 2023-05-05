-- 2023-05-05
-- https://www.hackerrank.com/challenges/area-under-curves-and-volume-of-revolving-a-curv/problem
-- This function should return a list [area, volume].
solve :: Int -> Int -> [Int] -> [Int] -> [Double]
solve l r a b =
    let dx = 0.001
        xs = subintervals l r dx
        ys = map (curve a b) xs
    in  [sum $ map (area dx) ys, sum $ map (volume dx) ys]

-- Returns the value of the algebraic expression applied to given x
curve :: [Int] -> [Int] -> Double -> Double
curve [] _ _ = 0
curve _ [] _ = 0
curve (a:as) (b:bs) x =
    let coeff = fromIntegral a :: Double
    in  coeff * x^^b + curve as bs x

-- Choose leftmost point of each subinterval between l and r
subintervals :: Int -> Int -> Double -> [Double]
subintervals l r dx = 
    let dl = fromIntegral l :: Double
        dr = fromIntegral r :: Double
    in  takeWhile (< dr) [dl, dl+dx..]

-- Calculate area of a given rectangle
area :: Double -> Double -> Double
area x y = x * y

-- Calculate volume of a disk with given radius and width
volume :: Double -> Double -> Double
volume w r = pi * r^2 * w
