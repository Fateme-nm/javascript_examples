/* Write a function that says a number and a length as input and multiplies that number by its length
Print the number in an array as output */

function Multiples(num,length){
    myArray=[]
    for(let i=1;i<=length;i++){
        myArray.push(num*i)
    }
    return myArray
}

let number=+prompt("Please enter a number :")
let numberOfMultiples=+prompt("please enter number of multiples :")
console.log(Multiples(number,numberOfMultiples))