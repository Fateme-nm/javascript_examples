/* Your task is to create a Circle constructor that creates a circle with a radius provided
by an argument.
The circles constructed must have two methods getArea () (PI * r ^ 2) and
getPerimeter () (2 * PI * r) which give both respective areas and perimeter
(circumference).
For help with this class, I have provided you with a Rectangle constructor which you
can use as a base example
1- Let circy=new Circle(11)
2- Circy.getArea()
3- //should return 380.132711084365
4- /////////////////////////////////////////////
5- Let circy =new Circle(4.44)
6- Circy.getPerimeter()
7- //should return 27.897342763877365 */

class Circle {
    constructor(radius) {
        this.radius = radius
    }

    pi = Math.PI

    getArea(){
		return this.pi * (this.radius ** 2)
	}

	getPerimeter(){
		return 2 * this.pi * this.radius
	}
}

let circle1=new Circle(11)
console.log(circle1.getArea())

let circle2 =new Circle(4.44)
console.log(circle2.getPerimeter())
