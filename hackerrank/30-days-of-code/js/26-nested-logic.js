// 2023-05-03
// https://www.hackerrank.com/challenges/30-nested-logic/problem
function calculateFine(returnDate, dueDate) {
    const [rDay, rMonth, rYear] = returnDate.split(' ').map(n => parseInt(n, 10));
    const [dDay, dMonth, dYear] = dueDate.split(' ').map(n => parseInt(n, 10));
    if (rYear < dYear) {
        return 0;
    } else if (rYear > dYear) {
        return 10000;
    } else if (rMonth > dMonth) {
        return 500 * (rMonth - dMonth);
    } else if (rDay > dDay) {
        return 15 * (rDay - dDay);
    } else {
        return 0;
    }
}
