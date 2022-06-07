/* Write a function that takes a string as input and deletes consecutive duplicate letters (Note: space in
Counting does not count) */

function deleteCh(str) {
    if (typeof(str) !== "string") return "Invalid input!"
    let arr = str.split("")
    for (let i = 0; i < arr.length; i++) {
        if (arr[i-1] === arr[i]) {
            do {
                arr.splice(i, 1)
            } while(arr[i-1] === arr[i])
        }
    }
    return arr.join("")
}

console.log(deleteCh("progress report template elementary school"))
console.log(deleteCh("hellloooo everrrybodddyyyy"))
console.log(deleteCh(12))