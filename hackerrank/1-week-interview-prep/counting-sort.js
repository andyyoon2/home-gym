// 2023-04-15
// https://www.hackerrank.com/interview/preparation-kits/one-week-preparation-kit/one-week-day-two/challenges
/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
    const counts = [];
    for (let i = 0; i < 100; i++) {
        counts.push(0);
    }
    for (let i = 0; i < arr.length; i++) {
        counts[arr[i]]++;
    }
    return counts;
}

