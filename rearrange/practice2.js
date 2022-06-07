/* Some people are standing in a row in a park. There are trees between them which cannot be
moved. Your task is to rearrange the people by their heights in a non-descending order without
moving the trees. People can be very tall!
For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190]. */

function solution(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== -1) {
            for (let j = i+1; j < arr.length; j++) {
                if (arr[j] < arr[i] && arr[j] !== -1) {
                    let temp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = temp
                }
            }
        }
    }
    return arr
}

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))

