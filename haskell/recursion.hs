-- 2023-05-02
replicate' count x
  | count <= 0 = []
  | otherwise  = x : replicate' (count-1) x

-- 2023-05-03
take' :: (Num a, Ord a) => a -> [b] -> [b]
take' n _
    | n <= 0 = []
take' _ [] = []
take' n (x:xs) = x : take' (n-1) xs

reverse' :: [a] -> [a]
reverse' [] = []
reverse' (x:xs) = reverse' xs ++ [x]

-- Get the nth Fibonacci number
fibonacci :: (Integral a) => a -> a
fibonacci 0 = 0
fibonacci 1 = 1
fibonacci n = fibonacci (n-1) + fibonacci (n-2)

-- Generate a list of the first n Fibonacci numbers
fibList :: (Integral a) => a -> [a]
fibList 0 = []
fibList 1 = [1]
fibList 2 = [1,1]
-- fibList n = let (ns:n1:n2) = fibList(n-1) in (ns:n1:n2:(n1+n2):[]) 
