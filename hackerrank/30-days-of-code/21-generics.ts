// 2023-04-26
// https://www.hackerrank.com/challenges/30-generics/problem?utm_campaign=30_days_of_code_continuous&utm_medium=email&utm_source=daily_reminder
function main() {
    let length = -1, arr = [];
    for (let line of inputLines) {
        // Length is input first
        if (length === -1) {
            length = parseInt(line, 10);
            continue;
        }
        arr.push(line.trim());
        // If we filled the array, print it and reset
        if (arr.length === length) {
            printArray(arr);
            arr = [];
            length = -1;
        }
    }
}

function printArray<T>(arr: T[]) {
    for (let el of arr) {
        process.stdout.write(el + '\n');
    }
}
