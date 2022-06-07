/* Rewrite your first function from a previous challenge to be a arrow function
Stretch goal : Rewrite counting down closure in arrow function form
1- //challenge start
2- Function splitBill(amount , numPeople){
3- Return "Each person needs to pay ${amount/ numPeople}"
4- }
5- //Console.log(splitBill(10,2));
6- //Console.log(splitBill(10,4));
7-
8- //stretch goal start
9- Function countdown(startingNumber ,step){
10- let countFromNum = startingNumber + step
11- Return function decrease(){
12- countFromNum -=step;
13- Return countFromNum;
14- }
15- }
16- Const countingDown =countdown(20,2);
17-
18- //console.log(countingDown());
19- //console.log(countingDown()); */

//challenge start
let splitBill = (amount , numPeople) => `Each person needs to pay ${amount/ numPeople}`

console.log(splitBill(10, 2))
console.log(splitBill(10, 4))

// stretch goal start
let countdown = (startingNumber ,step) => {
    let countFromNum = startingNumber + step
    return () => countFromNum -=step;
}

const countingDown = countdown(20, 2);
console.log(countingDown());
console.log(countingDown());
