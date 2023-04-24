// 2023-04-24
// https://www.hackerrank.com/challenges/30-interfaces/problem?isFullScreen=true
function main() {
    const n = parseInt(inputLines[0], 10);
    const Calc = new Calculator();
    if (!Calc.divisorSum) {
        return;
    }
    process.stdout.write('I implemented: AdvancedArithmetic\n');
    process.stdout.write(Calc.divisorSum(n) + '\n');
}

interface AdvancedArithmetic {
    divisorSum(n: number): number
}

class Calculator implements AdvancedArithmetic {
    divisorSum(n: number): number {
        if (n < 1) {
            // Invalid input for this problem
            return 0;
        }
        // Brute force
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                sum += i;
            }
        }
        return sum;
    }
}
