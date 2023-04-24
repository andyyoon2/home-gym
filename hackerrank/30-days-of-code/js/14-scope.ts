// 2023-04-19
// https://www.hackerrank.com/challenges/30-scope/problem?isFullScreen=true
function main() {
    const arr = inputLines[1].split(' ').map(x => parseInt(x, 10));
    const diff = new Difference(arr);
    diff.computeDifference();
    process.stdout.write(diff.maximumDifference + '\n');
}

class Difference {
    __elements: Array<number>;
    maximumDifference: number = 0;
    
    constructor(arr: Array<number>) {
        this.__elements = arr;
    }
    
    // n^2 comparisons required
    computeDifference() {
        let abs = 0;
        for (let i = 0; i < this.__elements.length; i++) {
            for (let j = 0; j < this.__elements.length; j++) {
                if (i === j) {
                    continue;
                }
                abs = Math.abs(this.__elements[i] - this.__elements[j]);
                if (abs > this.maximumDifference) {
                    this.maximumDifference = abs;
                }
            }
        }
    }
}
