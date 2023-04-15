// 2023-04-15
// https://www.hackerrank.com/challenges/30-binary-numbers/problem?isFullScreen=true
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}



function main() {
    let n: number = parseInt(readLine().trim(), 10);
    let x = 0, max = 1, runningMax = 0;
    // Find biggest power of 2 where 2^x <= n
    while (true) {
        if (Math.pow(2, x) >= n) {
            break;
        }
        x++;
    }
    // Find longest string of 1's
    while (x >= 0) {
        if (n >= Math.pow(2, x)) {
            // There is a 1 in the 2^x place
            runningMax++;
            if (runningMax > max) {
                max = runningMax;
            }
            n -= Math.pow(2, x);
        } else {
            // There is a 0 in this place
            runningMax = 0;
        }
        x--;
    }
    process.stdout.write(`${max}\n`);
}

/*
5 -> 0101
5 = 4 + 1

2^2 -> x = 2
put a 1 in the 2^2's place (add 1 to runningMax)
find the remainder: 5 - 2^2 = 1 (new n)
x--

now x = 1
1 >= 2^1 ? no
put a 0 in the 2^1's place (reset runningMax)
x--

x = 0
1 >= 2^0 ? yes
put a 1 in the 2^0's place (add 1 to runningMax)
remainder: 1 - 2^0 = 0
break loop

final binary = 101
max is 1

7 -> 0111
7 = 4+2+1
x = 2
7 >= 2^2 ? yes
put a 1 in the 2^2's place
remainder: 7 - 2^2 = 3
x--

x = 1
3 >= 2^1 ? yes
put a 1 in the 2^1's place
remainder: 3 - 2^1 = 1

x = 0
1 >= 2^0 ? yes


4 -> 0100
4 = 0 + 0 + 4

n = a*2^0 + b*2^1 + c*2^2 + ...
Where a,b,c... = [0,1]

n_max = 1_000_000

for n 
find biggest power of 2 (2^x) where 2^x <= n
x is where a `1` appears in binary
add 1 to runningMax

loop
if (n - 2^x) >= 2^(x-1)?
    add 1 to runningMax
else
    reset runningMax
x--
*/

