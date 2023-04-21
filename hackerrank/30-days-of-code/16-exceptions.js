// 2023-04-21
// https://www.hackerrank.com/challenges/30-exceptions-string-to-integer/problem
function main() {
    const S: string = readLine();
    const i = parseInt(S, 10);
    if (Number.isNaN(i)) {
        process.stdout.write('Bad String\n');
    } else {
        process.stdout.write(i + '\n');
    }
}
