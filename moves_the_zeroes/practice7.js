/* Write a function that moves all the zeroes to the end of an array. Do this without
returning a copy of the input array. */

function zeroesToEnd(arr){
    let counter=0
    for(let i=0;i<arr.length;i++){
        counter++
        if(arr[i]===0){
            let nextIsZero=true           // by defaulte
            do{
                counter++
                for(let j=i+1;j<arr.length;j++){
                    arr[j-1]=arr[j]       // move each element one forward
                }
                arr[arr.length-1]=0       // reset the last element
                if(arr[i]!==0){           // arr[i] has changed and should be checked to continue
                    nextIsZero=false   
                }
                if(counter===arr.length){ // to avoid falling into the infinite loop when done
                    break
                }
            }
            while(nextIsZero)
        }
        if(counter===arr.length){         // to avoid falling into the infinite loop when done
            break
        }
    }
    return arr
}

console.log(zeroesToEnd([1,2,0,0,4,0,5]))
console.log(zeroesToEnd([0,0,2,0,5]))
console.log(zeroesToEnd([4,4,5]))
console.log(zeroesToEnd([0,0]))