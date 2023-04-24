// 2023-04-18
// https://www.hackerrank.com/challenges/30-abstract-classes/problem?isFullScreen=true
class MyBook extends Book {
    /**   
    *   Class Constructor
    *   
    *   @param title The book's title.
    *   @param author The book's author.
    *   @param price The book's price.
    **/
    constructor(title, author, price) {
        super();
        this.title = title;
        this.author = author;
        this.price = price;
    }
    
    /**   
    *   Method Name: display
    *   
    *   Print the title, author, and price in the specified format.
    **/
    display() {
        process.stdout.write(`Title: ${this.title}\n`);
        process.stdout.write(`Author: ${this.author}\n`);
        process.stdout.write(`Price: ${this.price}\n`);
    }
}
// End class

