// Note : string is immutable (it will not modified original data)
// trim() - it will remove white space from string
const firstName = "  rahul   "
const trimValue = firstName.trim()
console.log(trimValue)


// toUpperCase() - if we want string in upperCase so we can use this method
const  lastName = "Rahul"
const convertToUppercase = lastName.toUpperCase();
console.log(convertToUppercase)

// tolowerCase() -   If we want string in lower case then we can this method

// slice() - we can start from first index and last index but it will not count the last index

const skills = "javascript"
const sliceValue = skills.slice(0,4)
console.log(sliceValue) //  output: java
console.log(skills.slice(1)) // output : avascript

// string concatenation
const myFirstName = "rahul";
const myLastName = "chouhan";
// console.log(myFirstName + ' ' + myLastName); output : rahul chouhan

// template string
console.log(`my firstName is ${myFirstName} and lastName is ${myLastName}`);

