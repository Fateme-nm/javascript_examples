/* Given two strings, find the number of common characters between them.
For s1 = "aabcc" and s2 = "adcaa", the output should be
solution(s1, s2) = 3.
Strings have 3 common characters - 2 "a"s and 1 "c"*/

function objLetters(s) {
    const obj = {}
    for (let i = 0; i < s.length; i++) 
        obj[s[i]] ? obj[s[i]]++ : obj[s[i]] = 1
    return obj
}

function solution(s1, s2) {   
    if (typeof(s1) !== 'string' || typeof(s2) !== 'string') return "Error!"    
    const [objS1, objS2] = [objLetters(s1), objLetters(s2)]
    let count = 0
    for (let prop in objS1) {
        if (objS2[prop]) count += Math.min(objS1[prop], objS2[prop])
    }
    return count
}

console.log(solution("aabcc", "adcaa"))
console.log(solution("aabcc", "adcaadfdxxc"))

