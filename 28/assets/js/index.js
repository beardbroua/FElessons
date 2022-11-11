let superCar = {
    manufacturer: "Daewoo Motors",
    model: "Matiz",
    "graduation year": 2008,
    "average speed": 80,
    "volume of tank": 40,
    "average fuel consumption": 7,
    driver: "Vasyl",
}

const carEntries = Object.entries(superCar);
console.log(carEntries)
alert(carEntries)
// carEntries.forEach(entry => {
//     let key = entry[0];
//     let value = entry[1];
//     alert(`${key}: ${value}`);
// })
function showInfo() {
    alert(`Current driver name is ${superCar.driver} `)
}
console.log(showInfo())

function changeDriverName() {
    let newName = prompt('Input new driver name')
    superCar.driver = newName
    alert(`The name of the driver is now ${superCar.driver}`)
}
console.log(changeDriverName())

function checkDriverName() {
    let checkName = prompt('Enter the name of the driver to check')
    if (superCar.driver !== checkName) {
        alert(`The driver's name is not ${checkName} but ${superCar.driver}`)
    } else {
        alert(`Everything is correct! The driver's name is ${superCar.driver}`)
    }
}
console.log(checkDriverName())

function checkTimeAndFuel() {
    let distance = +prompt('Enter the distance to be traveled')
    timeToTravel = distance / superCar["average speed"]
    if (timeToTravel / 4 >= 1) {
        restQnty = (Math.floor(timeToTravel)) / 4
    } else {
        restQnty = 0
    }
    totalTimeToTravel = restQnty + timeToTravel
    fuelQuantity = superCar["average fuel consumption"] / 100 * distance
    alert(`It will take ${totalTimeToTravel.toFixed(1)} hours and ${fuelQuantity.toFixed(1)} liters of fuel to cover this distance.`)
}
console.log(checkTimeAndFuel())



let time = {
    hours: 0,
    minutes: 0,
    seconds: 0,


    showInfo: function () {
        alert(`time in the object ${time.hours} hours ${time.minutes} min ${time.seconds} sec`)
    }
}
time.showInfo()






let newMinutes = 0
let newSeconds = 0
function changeSeconds() {
    newSeconds = +prompt('Enter the seconds')

}
function changeSek() {
    if (((time.seconds + newSeconds) / 60) >= 1) {
        time.minutes = ((Math.floor((time.seconds + newSeconds) / 60)) + time.minutes)
        
        x = (Math.floor((time.seconds + newSeconds) / 60))
        y = x * 60
        time.seconds = time.seconds + newSeconds - y
    } else {
        time.seconds = time.seconds + newSeconds
    }

}

function changeMinutes() {
    newMinutes = +prompt('Enter the minutes')

}

function changeMin() {
    if (((time.minutes + newMinutes) / 60) >= 1) {
        time.hours = ((Math.floor((time.minutes + newMinutes) / 60)) + time.hours)
        n = (Math.floor((time.minutes + newMinutes) / 60))
        console.log(n)
        t = n * 60
        console.log(t)
        time.minutes = time.minutes + newMinutes - t
    } else {
        time.minutes = time.minutes + newMinutes
    }

}

function changeHour() {
    newHour = +prompt('Enter the hour')
    time.hours = newHour
}

console.log(changeSeconds())
console.log(changeSek())
console.log(changeMin())
time.showInfo()
console.log(changeMinutes())
console.log(changeMin())
time.showInfo()
console.log(changeHour())
time.showInfo()



