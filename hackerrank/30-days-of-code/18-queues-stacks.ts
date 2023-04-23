// 2023-04-23
// https://www.hackerrank.com/challenges/30-queues-stacks/problem?isFullScreen=true
function main() {
    const s = inputLines[0];
    const result = isPalindrome(s);
    process.stdout.write(`The word, ${s}, is ${result ? '' : 'not '}a palindrome.\n`);
}

function isPalindrome(s: string): boolean {
    // Following the algorithm given in problem statement
    const Soln = new Solution();
    for (let c of s) {
        Soln.pushCharacter(c);
        Soln.enqueueCharacter(c);
    }
    let stackChar = '', queueChar = '';
    while (true) {
        stackChar = Soln.popCharacter();
        queueChar = Soln.dequeueCharacter();
        if (!stackChar || !queueChar) {
            break;
        }
        if (stackChar !== queueChar) {
            return false;
        }
    }
    return true;
}

class Solution {
    stack: string[] = [];
    queue: string[] = [];
    
    pushCharacter(ch: string) {
        this.stack.push(ch);
    }
    enqueueCharacter(ch: string) {
        this.queue.push(ch);
    }
    popCharacter() {
        return this.stack.pop();
    }
    dequeueCharacter() {
        return this.queue.shift();
    }
}
