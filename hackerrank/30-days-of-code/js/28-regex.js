// 2023-05-03
// https://www.hackerrank.com/challenges/30-regex-patterns/problem
function printNames(rows) {
    const users = rows.filter(row => /\@gmail\.com$/i.test(row.email));
    users.sort((a, b) => a.firstName < b.firstName ? -1 : 1);
    users.forEach(user => {
        console.log(user.firstName);
    });
}
