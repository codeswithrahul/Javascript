//  Data types in javascript

// There are two types of data types in javascript

// 1. Primitive 
//      Number
//      String
//      Boolean
//      undefined
//      null
//      BigIntsymbol
//      Symbol
// 2. Non Primitive
    
// we can check data type using type of


let  nums = 45;
console.log(typeof nums); // number
console.log(typeof "hello") // string

// convert number into String 
// num =  45 + ""
// console.log("Number to String : "+ typeof num) - string

// number to string 
const numTostr = 745;
// console.log(typeof String(numTostr)); --- String

// string to number 

const myName = "rahul";
// console.log(typeof +myName) --- number 
// console.log(typeof Number(myName))   --- number 


// Bigint - if we want to store more number so we can use bigInt
// we cant add bigInt + normal number , we have to convert all num to bigint for addition.
const num = BigInt(567123456791234567);
console.log(num)