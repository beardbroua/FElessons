let a = 0.1,
    b = 0.2;

console.log((a * 10 + b * 10) / 10);


let x = '1',
    y = 2;
console.log(x / 1 + y);


let driveVolume = prompt("Привіт! Вкажи обсяг своєї, повної вірусів, флешки.");
const gb = 1024;
let filesNumber = (Math.floor(driveVolume * gb / 820));
alert(`Якщо не шкода форматнути флешку то влізе ${filesNumber} цих файлів`);


let cash = prompt("Ти досі користуєшся готівкою? Це жах! Скілки ще цих папірців в тебе залишилось?");
let chocoPrice = prompt("А скільки коштує одна не рошенівська шоколадка?");
let chocoFoolQuantity = (cash / chocoPrice);
let chocoQuantity = (Math.floor(chocoFoolQuantity));
let shortChange = (Math.round((chocoFoolQuantity - chocoQuantity) * 100) / 100);
if (cash > chocoPrice) { alert("Сьогодні в тебе день здоров'я! Сподіваюсь ти не забула,що їсти солодке шкідливо?");
} else { alert(`Будь-ласка обміняй свої застарілі фіатні гроші на ${chocoQuantity}шт шоколаду.`) ;}
if (shortChange > 0) { alert(`В тебе залишиться ще ${shortChange} грн решти, тож твій маршрут сьогодні обов'язково має пролягати біля церкви.`);};

let number = prompt ("Будь-ласка введи тризначне число");
alert(('' + number).split('').reverse().join(''));

