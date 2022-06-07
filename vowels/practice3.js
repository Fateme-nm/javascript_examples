/* Write a program that receives a string as input and prints all its vowels */

function remove(str){
    let newStr=" "
    for(let char of str){
        if(char!='a' && char!='e' && char!='o' && char!='i' && char!='u'){
            newStr+=char
        }
    }
    return newStr
}

console.log(remove("progress report template elementary school"))