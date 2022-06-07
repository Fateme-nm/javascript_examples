/* Jack is a very habitual person.He eats breakfast at 7:00 a.m. each morning,
lunch at 12:00 p.m and dinner at 7:00 p.m. in the evening.
Create a function that takes in the current time a a string and determines the
duration of time before jack’s next meal.Represent this as an array with the first
and second elements representing hours and minutes, respectively.
timeToEat("2:00 p.m.") [5, 0]
// 5 hours until the next meal, dinner
timeToEat("5:50 a.m.") [1, 10]
// 1 hour and 10 minutes until the next meal, breakfast */

function timeToEat(timeStr) {
    let timeArr = [7, 12, 19]
    let hour = timeStr.slice(0, timeStr.indexOf(":"))
    let minutes = timeStr.slice(timeStr.indexOf(":")+1, timeStr.indexOf(":")+3)
    hour = (timeStr.split(" "))[1][0] === "a" ? hour : +hour + 12
    let nextTime = timeArr.find(t => t >= hour)

    let resulte = []
    resulte.push(minutes ==0 ? nextTime - hour : (nextTime - 1) - hour)
    resulte.push(minutes == 0 ? 0 : 60 - minutes)
    return resulte
}

console.log(timeToEat("2:00 p.m."))
console.log(timeToEat("5:50 a.m."))