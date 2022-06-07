/* Write a function that takes a string in the input and follows the string where the first and last letters are shifted.
The following conditions return:
1. If the string length is less than 2, return Incompatible.
2. If no string input, return Incompatible.
3. If the first and last letters are the same, return "Two's a pair"

flipEndChars("Cat, dog, and mouse.") ➞ ".at, dog, and mouseC"
flipEndChars("ada") ➞ "Two's a pair."
flipEndChars("Ada") ➞ "adA"
flipEndChars("z") ➞ "Incompatible."
flipEndChars([1, 2, 3]) ➞ "Incompatible."
*/

function flipEndChars(str){
    if (str.length<2 || typeof(str)!=="string")
        return "Incompatible"
    if (str[0]===str[str.length-1])
        return  "Two’s a pair"
    // let arr=str.split("")
    // let temp=arr[0]
    // arr[0]=arr[arr.length-1]
    // arr[arr.length-1]=temp
    //return arr.join("")
    return str[str.length-1]+str.slice(1,str.length-1)+str[0]
}

console.log(flipEndChars("Cat, dog, and mouse."))
console.log(flipEndChars("ada"))
console.log(flipEndChars("Ada"))
console.log(flipEndChars("z") )
console.log(flipEndChars([1, 2, 3]))