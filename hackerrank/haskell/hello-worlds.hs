-- 2023-04-29
-- https://www.hackerrank.com/challenges/fp-hello-world-n-times/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
{-# LANGUAGE FlexibleInstances, UndecidableInstances, DuplicateRecordFields #-}

module Main where

import Control.Monad
import Data.Array
import Data.Bits
import Data.List
import Data.List.Split
--import Data.Set
import Debug.Trace
import System.Environment
import System.IO
import System.IO.Unsafe

hello_worlds n = [ "Hello World" | _ <- [1..n] ]

main = do
    n <- readLn :: IO Int
    mapM putStrLn (hello_worlds n)
    -- Print "Hello World" on a new line 'n' times.
