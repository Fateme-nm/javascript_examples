/* Write a function that takes in a string and for each character, returns the distance
to the nearest vowel in the string. If the character is a vowel itself, return 0. */

function distanceToNearestVowel(str){
    let arr=str.split("")
    for(let i=0;i<arr.length;i++){
        if(arr[i]==='a' || arr[i]==='i' || arr[i]==='e' || arr[i]==='u' || arr[i]==='o'){
            arr[i]=0                    
        }
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            let distanceToLeft=Infinity
            for(let j=i-1;j>=0;j--){    // distance to the first zero element from the left
                if(arr[j]===0){
                    distanceToLeft=i-j
                    break
                }
            }
            let distanceToRight=Infinity
            for(let j=i+1;j<arr.length;j++){    // distance to the first 0 from the left
                if(arr[j]===0){
                    distanceToRight=j-i 
                    break
                }
            }
            if(distanceToRight<=distanceToLeft){  // Check the nearest distance to 0
                arr[i]=distanceToRight
            }
            else{
                arr[i]=distanceToLeft
            }
        }
    }
    return arr
}
console.log(distanceToNearestVowel("aaaaa"))
console.log(distanceToNearestVowel("babbb"))
console.log(distanceToNearestVowel("abcdabcd"))
console.log(distanceToNearestVowel("shopper"))