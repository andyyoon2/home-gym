-- 2023-05-04
-- https://www.seas.upenn.edu/~cis1940/spring13/lectures/02-ADTs.html
data Dessert = Cookie
             | Cheesecake
             | IceCream
             | Waffle
             | Brownie
  deriving Show

isCold :: Dessert -> Bool
isCold IceCream   = True
isCold Cheesecake = True
isCold _          = False

-- Store a person's name, age, favorite dessert
data Person = Person String Int Dessert

insoo :: Person
insoo = Person "Insoo" 31 Cheesecake

jaemin :: Person
jaemin = Person "JaeMin" 28 Cookie

getAge :: Person -> Int
getAge (Person _ a _) = a

getDessert :: Person -> Dessert
getDessert (Person _ _ d) = d

-- Attempting to define the same body for 2 specific cases
-- rateDessert :: Person -> String
-- rateDessert (Person _ _ d) =
--   let yum = "Yum, " ++ show d in
--       case d of
--         IceCream -> (yum d)
--         Cheesecake -> (yum d)
--         _ -> "Your dessert is good too!"
