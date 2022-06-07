/* What is the output of the following code snippet? */

function myFunction(){
    var ab="variable"
    function ab(){
        return "function"
    }
    return ab   // output: variable
}

console.log(myFunction())

/*
In javascript Function declarations take precedence over variable declarations
and Variable assignment takes precedence over function declaration.
So Function declarations are hoisted over variable declarations 
but not over variable assignments.

If we do not assign a value to the variable ab, the output will be the function ab
*/