/* Write a program that takes an array and a number and divides it into arrays by the number of inputs (without
Method) 
chunkify([2, 3, 4, 5], 2) [[2, 3], [4, 5]]
chunkify([2, 3, 4, 5, 6], 2) [[2, 3], [4, 5], [6]]
chunkify([2, 3, 4, 5, 6, 7], 3) [[2, 3, 4], [5, 6, 7]]
chunkify([2, 3, 4, 5, 6, 7], 1) [[2], [3], [4], [5], [6], [7]]
chunkify([2, 3, 4, 5, 6, 7], 7) [[2, 3, 4, 5, 6, 7]]*/

function chunkify(arr, num) {
    if (num <= 0 || typeof(num) !== 'number' || arr.length === 0) 
        return "Invalid input!"
    let [newArr, counter, index] = [[[]], 0, 0]
    for (let i = 0; i < arr.length; i++) {
        if (counter === num) {
            newArr.push([])
            index++ 
            counter=0
        }
        newArr[index].push(arr[i])
        counter++
    }
    return newArr
}

console.log(chunkify([2, 3, 4, 5], 2))
console.log(chunkify([2, 3, 4, 5, 6], 2))
console.log(chunkify([2, 3, 4, 5, 6, 7], 3))
console.log(chunkify([2, 3, 4, 5, 6, 7], 1))
console.log(chunkify([2, 3, 4, 5, 6, 7], 7))