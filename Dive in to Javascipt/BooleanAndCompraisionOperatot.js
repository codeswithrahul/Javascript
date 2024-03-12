// boolean & comparison operator

// boolean
// trur , False

const num1 = 7;
const num2 = 7;
// console.log(num1 === num2); ----> true

const num3 = 7;
const num4 = 8;
// console.log(num3 >= num4); --------->false

// == v/s ===
// == ---> check only values it is equal or not
// === --> check values as well as data type
// console.log(1== "1") ---> true
// console.log(1 === "1") --> false

// && and || operator

// let assume we want to check two condition at a time so we can user && opeartor

let age = 17;
let country = "USA";
// in both condition should be satisfied then if block will execute.
if (age >= 18 && country === "USA") {
  console.log("he can go anywhere");
} else {
  console.log("he can't go anywhere");
}
// or || operator
// in or operator one condition should be true then it will go inside the if block.

if (age >= 18 || country === "USA") {
  console.log("he can go anywhere");
} else {
  console.log("he can't go anywhere");
}

// nested if else
//  we can check condition in else as well.

// let guessNumber = 12;
// const usererGuess = +prompt("guess the number");

// if (guessNumber === usererGuess) {
//   console.log("your guess is right");
// } else {
//   if (guessNumber > usererGuess) {
//     console.log("your guess is low");
//   } else {
//     console.log("your number is high");
//   }
// }

let tempInDegree = 50;

if (tempInDegree < 0) {
  console.log("extremely cold outside");
} else if (tempInDegree < 16) {
  console.log("It is cold outside");
} else if (tempInDegree < 25) {
  console.log("wheather is okay ");
} else if (tempInDegree < 35) {
  console.log("lets go for swim");
} else if (tempInDegree < 45) {
  console.log("turn on AC");
} else {
  console.log("too hot!!");
}

// we can write switch case for checking condition
//  break : -- > if condition satisy then it will stop execution and return it console.log("whatever")
//  default : ---- if value is not there then default will be execute.
let day = 52;

switch (day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;

  default:
    console.log("invalid day");
    break;
}
