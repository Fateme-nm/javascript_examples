/* Write a function that receives a number as input and has even numbers equal to 1
Print as output */

let number=+prompt("Please enter a number :")
for(let i=2;i<=number;i++){
	if(i%2==0){
		console.log(i)
	}
}