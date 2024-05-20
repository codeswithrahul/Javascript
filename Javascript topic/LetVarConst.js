// LET
// - Let is block scope, it won't be accesible outside the block
// - In Let we can re-initilise the value
// - if we access let variable before initilisation it will throw an error

// Var
// - Var is a function scope
// - we can access globally
// - we can re-initilise the value
// - we can access before initialisation but it will become undefined

// const
// - const is block scope
// - we cant re-initilise
// - if we access const variable before initilisation it will throw an error

// console.log(firstName)

var firstName = 'Rahul'
let lastName = 'test'
let age = 15
firstName = 100
var a

const hoursInDay = 24


let userIntro = 
    'Hi, my name is ' 
    + firstName + ' ' 
    + lastName + '. I am ' + age + ' ' + 'years old.'