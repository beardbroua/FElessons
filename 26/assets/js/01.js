



let old = prompt('How old are you?')
if (old < 0) {alert('Congratulations! You have everything ahead of you!')
} else if (old >0 && old <= 11) {alert('you are a child')
} else if (old >= 12 && old <= 17 ) {alert('you are a teenager')
} else if (old >= 18 && old <= 59 ) {alert('you are a adult')
} else if (old >= 60 && old <= 110 ) {alert('you are retired')
} else if (old > 110 ) {alert('Most of all, you are already in heaven')
}



let numb = prompt('Write a number from zero to nine')
if (numb < 0 || numb > 9){alert('FROM 0 TO 9!!!')
} else if (numb == 1){alert('!')
} else if (numb == 2){alert('@')
} else if (numb == 3){alert('#')
} else if (numb == 4){alert('$')
} else if (numb == 5){alert('^')
} else if (numb == 6){alert('&')
} else if (numb == 7){alert('*')
} else if (numb == 8){alert('(')
} else if (numb == 9){alert(')')
}


let num1 = +prompt('write the first number of the range')
let num2 = +prompt('write the last number of the range')
let summ = 0
for(let i=num1; i <= num2; i++){
    summ += i;

}
console.log(summ)
alert(`the sum of all numbers in the given range is equal ${summ}`)


let x = +prompt('the first number')
let y = +prompt('the second number')

function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      let t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  alert(`The greatest common divisor is${gcd_two_numbers(x, y) }`)







let n = prompt('Enter the number')
let z =""
for (i=1;i<=n;i++) {
    if (n%i==0) 
    z+= i+ " "; 

}
alert(`all divisors of this number is ${z}`)



let number = prompt('Enter the number')
 if ((number > 9999)&&(number < 100000) ){
    str = number + '';
    let reverse =  str.split("").reverse().join("");
    if (reverse == str) {
        alert('number is a palindrome');
    }
    else {
        alert('number is not a palindrome');
    }

 }
 else {
    alert('the number is not five-digit');
 }




 let sum =+prompt('enter the purchase amount')
 let sumWithDisc = 0
 if((sum >= 200) && (sum <=300)) {
     sumDics = sum * 0.03
 }
  if ((sum >= 300) && (sum <=500)) {
sumDics = sum * 0.05
 }
  if (sum>500) {
    sumDics = sum * 0.07
 }
 if (sum<200) {
    alert('you have too few funds')
   
 } else {
    sumWithDisc = sum - sumDics;
    alert( `the amount with a discount is ${sumWithDisc}`);
 }
  




let positive = 0
let negative = 0
let zero = 0
let one = 0
let even = 0
let odd = 0
alert("Enter 10 numbers")
for (let numQuantity = 1; numQuantity <= 10; numQuantity++) {
    num = +prompt("Enter the next number")
    if (num > 0) {
        positive = ++positive

    }
    if (num < 0) {
        negative = ++negative

    }
    if (num == 0) {
        zero = ++zero

    }
    if (num == 1) {
        one = ++one

    }
    if (num % 2 == 0) {
        even = ++even

    }
    if (num % 2 !== 0) {
        odd = ++odd

    }
   


}

alert(`You have entered ${even} even numbers, ${odd} odd numbers, ${negative} negative numbers, ${positive} positive numbers, ${zero} numbers equal to zero and ${one} numbers equal to one `)




const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let currDay = 0;

while (confirm(`${days[currDay]}. Want to see the next day?`)) {
  currDay = (currDay + 1) % days.length;
}







