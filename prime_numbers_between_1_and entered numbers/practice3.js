/* Write a function that takes a number as input and the prime numbers of Ben 1 to that number
Print as output 
input --> 5, 7
output --> [5,10,15,20,25,30,35]
*/

function prime(num) {
	for(let n=1;n<=num;n++){
		if(n==1 || n==2){
			console.log(n)
		}
		else{
			let Divisible=false
			for(let i=2;i<=n/2;i++){
				if(n%i==0){
					Divisible=true
					break
				}
			}
			if (Divisible==false){
				console.log(n)
			}
		}
	}
}

let number=+prompt("Please enter a number :")
prime(number)