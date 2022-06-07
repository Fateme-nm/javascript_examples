/* A) Write a program that names the properties of "lesson name", "unit number", and "capacity" for two objects.
function constructor (print on networkClass and softEngineeringClass output
B) According to section A for the property network class with the project name and for the property software engineering class
Add the name of the book */

function MyClass(className, classUnit, classCapacity) {
    if (!new.target)
        return new MyClass(className, classUnit, classCapacity)
    this.className = className
    this.classUnit = classUnit
    this.classCapacity = classCapacity
    this.myObj = function() {
        let str = ``
        for(const item in this){
            if (item !== 'myObj')
                str += item !== 'className' ? `,${item}:${this[item]}` : `${item}:${this[item]}`
        }
        return `{${str}}`
    }
}

let softEngineeringClass = new MyClass("softEngineering", 3, 50)
let networkClass = MyClass("netWork", 3, 30)

console.log(softEngineeringClass.myObj())
softEngineeringClass.book = "Software book"
console.log(softEngineeringClass.myObj())

console.log(networkClass.myObj())
networkClass.project = true
console.log(networkClass.myObj())

