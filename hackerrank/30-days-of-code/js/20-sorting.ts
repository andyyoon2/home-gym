// 2023-04-25
// https://www.hackerrank.com/challenges/30-sorting/problem
function bubbleSort(a: number[]) {
    let totalSwaps = 0, numSwaps = 0;
    for (let i = 0; i < a.length; i++) {
        numSwaps = 0;
        for (let j = 0; j < a.length - 1; j++) {
            if (a[j] > a[j + 1]) {
                swap(a, j, j + 1);
                numSwaps++;
            }
        }
        
        if (numSwaps === 0) {
            break;
        }
        totalSwaps += numSwaps;
    }
    
    process.stdout.write(`Array is sorted in ${totalSwaps} swaps.\n`);
    process.stdout.write(`First Element: ${a[0]}\n`);
    process.stdout.write(`Last Element: ${a[a.length - 1]}\n`);
}

function swap(arr: number[], a: number, b: number) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
