// Завдання 1-6
const myAge = 13;
console.log(myAge);

const myName = "Максим";
console.log(myName);

const isStudent = false;
console.log(isStudent);

const myString = "Hello World!";
console.log(myString);

let myNumber = 9;
myNumber += 10;

console.log(myNumber);

const myNull = null;
console.log(myNull);

// Завдання 7

const userName = prompt("Введіть ваше ім'я");
alert("Привіт " + userName + "!");

// Завдання 8

const confirmation = confirm("Будь ласка, підтвердіть дію");

if (confirmation == true) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}

// Завдання 9

alert("Дія небезпечна!");
const cancellation = confirm("Підтверіть дію");

if (cancellation == true) {
  alert("Дія підтверджена");
} else {
  alert("Дію відмінено");
}
