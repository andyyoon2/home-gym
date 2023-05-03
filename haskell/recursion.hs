-- 2023-05-02
replicate' count x
  | count <= 0 = []
  | otherwise  = x : replicate' (count-1) x

take' count xs
  | count <= 0 = []
  | xs == []   = []
  | otherwise  = let
