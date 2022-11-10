// Створи функцію, яка буде виводити кількість переданих їй аргументів.

alert("Enter 3 numbers")
argQunty = 0;
function add() {


    for (argNumber = 1; argNumber <= 3; argNumber++) {
        let arg = prompt('Enter number')
        argQunty += 1;
    }
    return argQunty;
}
console.log(add())
alert(`You entered ${argQunty} numbers`)

// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

alert("Enter two nambers")
let num1 = prompt('Enter first number')
let num2 = prompt('Enter second number')
function checkNamber(num11, num22) {
    num11 = num1
    num22 = num2

    if (num1 < num2) {

        return alert('-1')

    }
    if (num1 > num2) {

        return alert('1')

    }
    if (num1 == num2) {

        return alert('0')

    }

}
checkNamber()

// Напиши функцію, яка обчислює факторіал переданого їй числа.

function factorial(n) {
    if (n == 1) return 1;
    else return n * factorial(n - 1);
}
let userNum = +prompt('Enter a number to calculate factorial');
alert(factorial(userNum));


// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.Наприклад: цифри 1, 4, 9 перетворяться в число 149.

let number1 = prompt('Enter first number')
let number2 = prompt('Enter second number')
let number3 = prompt('Enter third number')

function gluing(x, y, z) {
    x = number1
    y = number2
    z = number3
    finNum = x + y + z
    return finNum
}
gluing()
alert(`Here's what happened in the end - ${finNum}`)


// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function calcSquare(x, y) {
    if (x == 0) return y * y
    if (y == 0) return x * x
    else return x * y
    console.log(calcSquare(x))
}

let length = +prompt('Write the length of the rectangle')
let width = +prompt('Write the width of the rectangle')
alert(calcSquare(length, width))


// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

let number = +prompt('Enter the number')
function is_perfect(number) {
    var temp = 0;
    for (var i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            temp += i;
        }
    }

    if (temp === number && temp !== 0) {
        alert("This is the perfect number.");
    }
    else {
        alert("It's not the perfect number..");
    }
}

is_perfect(number);
// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

let fstNum = prompt('Enter the first number in the range')
let lstNum = prompt('Enter the last number in the range')

function getPerfect(a, b) {
    let result = [];
    for (let i = a; i < b; i++) {
        sum = 0;
        for (let n = 1; n <= i / 2; n++) {
            if (i % n === 0) sum += n;
        }
        if (i === sum) result.push(i);

    }
    if (result == 0) alert('There are no perfect numbers in your range')
    return alert(`Ideal numbers in your range is ${result}`);
}

console.log(getPerfect(fstNum, lstNum));
