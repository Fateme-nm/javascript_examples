/* What is the output of the following code snippet? */

var text = 'outside';
function logIt(){
    console.log(text); // undefined (Descriptions are in lines 13 to 26)
    var text = 'inside';
    function check(){
        let tmp= 'inside';
    }
    console.log(tmp); // Uncaught ReferenceError: tmp is not defined (Descriptions are in line 30 to 31)
};
logIt();

/*
answer: 

variable declarations (and declarations in general) 
are processed before any code is executed, 
declaring a variable anywhere in the code is equivalent to declaring it at the top. 
This also means that a variable can appear to be used before it's declared. 
This behavior is called "hoisting", 
as it appears that the variable declaration 
is moved to the top of the function or global code.

so :
1.text hoisted to top of file scope and text is undefined.
2.text is now assigned 'outside'
3.text hoisted to top of function scope and text is undefined.
4.console.log(text) print undefind.
5.text is now assigned 'inside'
*/

/*
variables defined inside a function are not accessible (visible) 
from outside the function.
*/