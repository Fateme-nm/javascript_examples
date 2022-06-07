/* Write a function that takes a number)] ([-3, 3 and a letter ("(male)" m or ")) female (" f
And return the ratio of the user's ancestor or children according to the table below 
Generation Male Female
-3 great grandfather great grandmother
-2 grandfather grandmother
-1 father mother
0 me! me!
1 son daughter
2 grandson granddaughter
3 great grandson great granddaughter
generation(2, "f") ➞ "granddaughter"
generation(-3, "m") ➞ "great grandfather"
generation(1, "f") ➞ "daughter"*/

function generation(n,g) {
    const generationObj={
        "-3": {
            m: "great grandfather",
            f: "great grandmother"
        },
        "-2": {
            m: "grandfather",
            f: "grandmother"
        },
        "-1": {
            m: "father",
            f: "mother"
        },
        "0": {
            m: "me!",
            f: "me!"
        },
        "1": {
            m: "son",
            f: "daughter"
        },
        "2":{
            m: "grandson",
            f:"granddaughter"
        },
        "3":{
            m: "great grandson",
            f: "great granddaughter"
        }
    }
    return generationObj[n][g]
}

console.log(generation(2, "f"))
console.log(generation(-3, "m"))
console.log(generation(1, "f"))