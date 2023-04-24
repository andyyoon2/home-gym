// 2023-04-22
// https://www.hackerrank.com/challenges/30-more-exceptions/problem?isFullScreen=true
function main() {
    const calc = new Calculator();
    let args: number[];
    for (let i = 1; i < inputLines.length; i++) {
        args = inputLines[i].split(' ').map(s => parseInt(s, 10));
        try {
            process.stdout.write(calc.power(args[0], args[1]) + '\n');
        } catch (err) {
            process.stdout.write(err.message + '\n');
        }
    }
}

class Calculator {
    power(n: number, p: number): number {
        if (n < 0 || p < 0) {
            throw new Error('n and p should be non-negative');
        }
        return Math.pow(n, p);
    }
}
