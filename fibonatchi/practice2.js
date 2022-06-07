/* Write a program that takes a string such as 𝑛𝑠,…, 𝑠1, 𝑠2 from the symbols and - by entering a natural number n.
Make 𝑖𝑠 positive if and only if the number i is part of the Fibonacci sequence */

function areInFib(num){
    let arr=[]
    for(let i=1;i<=num;i++){
        let [n1,n2,temp]=[1,1,0]
        while(n2!==i && n2<i){
            temp=n2
            n2=n1+n2
            n1=temp
        }
        if(n2===i) arr.push('+')
        else arr.push('-')
    }
    return arr.join("")
}

console.log(areInFib(4))
console.log(areInFib(15))