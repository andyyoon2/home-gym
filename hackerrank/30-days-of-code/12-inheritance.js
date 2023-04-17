// 2023-04-17
// https://www.hackerrank.com/challenges/30-inheritance/problem?isFullScreen=true
class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param idNumber - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    constructor(firstName, lastName, idNumber, scores) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = idNumber;
        this.scores = scores;
    }

    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    calculate() {
        let total = 0;
        for (let score of this.scores) {
            total += score;
        }
        const avg = total / this.scores.length;
        if (avg >= 90) {
            return 'O';
        } else if (avg >= 80) {
            return 'E';
        } else if (avg >= 70) {
            return 'A';
        } else if (avg >= 55) {
            return 'P';
        } else if (avg >= 40) {
            return 'D';
        } else {
            return 'T';
        }
    }
}

