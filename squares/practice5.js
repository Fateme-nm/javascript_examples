/* You have to create a function that takes two integers n and d and makes an array
of squares of all numbers from 0...<= n and returns the count of the digits d in the array. */

function countDigits(n,d){           
    let arr=[]
    for(let i=0;i<=n;i++){
        arr.push(i**2)
    }
    let counter=0
    for(let digit of arr.join("")){ //convert items of array to string for loop
        if(+digit===d){   
            counter++
        }
    }
    return counter
}

// function countDigits(n,d){       // without using join method
//     let arr=[]
//     for(let i=0;i<=n;i++){
//         arr.push(i**2)
//     }
//     let counter=0
//     for(let num of arr){
//         for(let digit of String(num)){
//             if(+digit===d){
//                 counter++
//             }
//         }
//     }
//     return counter
// }


// function countDigits(n,d){       // without using an array and the join method
//     let counter=0
//     for(let i=0;i<=n;i++){
//         for(let digit of String(i**2)){
//             if(+digit===d){
//                 counter++
//             }
//         }
//     }
//     return counter
// }

console.log(countDigits(25,2))
console.log(countDigits(10,1))