/* Write a program that returns the largest number as output, in this program a set of exceptions must be managed
To make the input valid:
Note that the conditions for implementing the program are as follows:
 بزرگ A given large integer will always be valid.
 کمترOne integer less than or equal to JS MAX_SAFE_INTEGER to a large integer
(Before calculating the maximum value) is converted
A given string containing an integer less than or equal to JS MAX_SAFE_INTEGER to
A large integer (before calculating the maximum value) is converted.
 ورIf no input is given, the function must return null.
 هیچIf any of the above conditions are not met, the given input is not valid.
 گرIf the input is valid, the highest value given is a large integer.
 رشته is a "Big Error" string, if the input contains invalid data
*/

function max() {
    if (arguments.length === 0) return null
    try {
        const maxInt = Number.MAX_SAFE_INTEGER
        this.maxi = BigInt(arguments[0])//add property to global obj(window)
        for (let i = 0; i < arguments.length; i++) {
            let curr = arguments[i]
            if (typeof(curr) !== 'bigint')
                if (curr > maxInt || curr === "") throw 'myException'
                else curr = BigInt(curr)
            if (curr > this.maxi) 
                this.maxi = curr  // change value of property
        }
        return this.maxi // return value of property maxi
    }catch(err) {
        return "Big Error"
    }
}

console.log(max(1n, 10n, 5n))
console.log(max("10",5n, 1)) 
console.log(max())
console.log(max(2 ** 53 - 1))
console.log(max(2 ** 53))       // check in line 9
console.log(max("10" / 3))
console.log(max("10" / 2))
console.log(max(10 - 12, 10 - 10, 10 - 11))
console.log(max(0n))
console.log(max(""))            // check in line 9

