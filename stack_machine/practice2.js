/* A stack machine processes instructions by pushing and popping
values to an internal stack. A simple example of this is a calculator.
The argument passed to run(instructions) will always be a string containing a
series of instructions.
The instruction set of the calculator will be this:
+: Pop the last 2 values from the stack, add them, and push the result onto the
stack.
-: Pop the last 2 values from the stack, subtract the lower one from the topmost
one, and push the result.
*: Pop the last 2 values, multiply, and push the result.
/: Pop the last 2 values, divide the topmost one by the lower one, and push the
result.
DUP: Duplicate (not double) the top value on the stack.
POP: Pop the last value from the stack and discard it.
PSH: Performed whenever a number appears as an instruction. Push the number
to the stack.
Any other instruction (for example, a letter) should result in the value "Invalid
"instruction: [instruction]
StackCalc("") ➞ 0
StackCalc("5 6 +") ➞ 11
StackCalc("3 DUP +") ➞ 6
StackCalc("6 5 5 7 * - /") ➞ 5
StackCalc("x y +") ➞ Invalid instruction: x */

class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow"
        }
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length == 0;
    }
}

function stackCalc(instruction) {
    let stack = new Stack()
    if (instruction === "") return 0
    let arr = instruction.split(" ").map(item => item = +item == item ? +item : item)
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i]))
            stack.push(arr[i]);
        else {
            if (arr[i] != 'DUP' && arr[i] != 'POP' && arr[i] != 'PSH') {
                let [num1, num2] = [stack.pop(), stack.pop()]
                if ((num1 == "Underflow" || num2 == "Underflow") )
                    return `Invalid instruction: ${arr[i]}`
                operatorObj = {
                    '+': () => stack.push(num1 + num2),
                    '-': () => stack.push(num1 - num2),
                    '*': () => stack.push(num1 * num2),
                    '/': () => stack.push(num1 / num2)
                }
                operatorObj[arr[i]].call()
            }
            else {
                symbolObj = {
                    'DUP': () => stack.push(stack.peek()),
                    'POP': () => stack.pop(),
                    'PSH': () => stack.push()
                }
                symbolObj[arr[i]].call()
            }
        }
    }
    return stack.pop();
}

console.log(stackCalc("")) 
console.log(stackCalc("5 6 +")) 
console.log(stackCalc("3 DUP +"))
console.log(stackCalc("6 5 5 7 * - /"))
console.log(stackCalc("x y +"))