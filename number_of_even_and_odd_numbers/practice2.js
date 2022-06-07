/* Write a function that receives an array as input and gives it an even number and odd numbers
Print the title */

function evenOdd(array){
	let even=0
	let odd=0
	for(let i=0;i<array.length;i++){
		if(array[i]%2==0){
			even++
		}
		else{
			odd++
		}
	}
	alert("even : "+even+"\nodd  : "+odd)
}

myArray=[]
let num
while(true){
	num=prompt("Please enter a number : \n(if you want to stop , enter s)")
	if(num=='s'){
		break
	}
	myArray.push(num)
}

evenOdd(myArray)