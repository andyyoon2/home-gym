-- 2023-04-29
-- https://www.hackerrank.com/challenges/fp-list-replication/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
f :: Int -> [Int] -> [Int]
f n arr = concatMap (replicate n) arr

-- This part handles the Input and Output and can be used as it is. Do not modify this part.
main :: IO ()
main = getContents >>=
       mapM_ print. (\(n:arr) -> f n arr). map read. words
