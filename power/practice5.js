/* Write a function that takes 2 numbers from the input and calculates the first number to the power of the second number */

function powerOfnumber(num1,num2){
    let multi=1
    for(let i=0;i<num2;i++){
        multi*=num1
    }
    return multi
}

let num1=+prompt("Please enter number 1 :")
let num2=+prompt("Please enter number 2 :")
alert("num1^num2="+powerOfnumber(num1,num2))