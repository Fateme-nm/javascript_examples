/* Write a function that receives a natural number as input from the user
And implement the opposite function 
f(1) =  - 1  = -1
f(2) =  - 1 + 2 = 1
f(3) =  - 1 + 2 - 3  =  -2
f(4) =  - 1 + 2 - 3 + 4 = 2 */

function sumOfPandN(num){
    let sum=0
    let currentNumber
    for(let i=1;i<=num;i++){
        if(i%2==0){
            currentNumber=i
        }
        else{
            currentNumber=-i
        }
        sum+=currentNumber
    }
    return "f("+num+")="+sum
}

let number=+prompt("Please enter a natural number :")
alert(sumOfPandN(number))