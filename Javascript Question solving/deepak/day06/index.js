// const data = [1,2,3,4,5,5,6,9,9];
// let resultArr = [];
// function dup(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//               if(arr[i] === arr[j]){
//                 resultArr.push(arr[i]);
//               }
//         }
//     }
//     return resultArr;
// }
// console.log(resultArr)

// console.log(dup(data))

// ****
// ****
// ****
// ****


// function printStar(n){

//     for(let i =0;i<n;i++){
//         let temp = "";
//           temp = temp + "* "
//           console.log(temp) 
//         //                      *  
//     }

// }

// console.log(printStar(4))


// function printStar(n) {
//     for (let i = 0; i <= n; i++) {
//         let row = "";
//          for(let j=0; j<4; j++){
//             row = row + "*"
//          }
//          console.log(row);

//     }
// }
// console.log(printStar(4))

// 1
// 1 1
// 1 1 1
// 1 1 1 1

// function printSimpleStar(n){
//     for(let i=0; i<=n;i++){
//         let temp = ""
//         for(let j=0;j<=i;j++){
//             temp = temp + "1";    
//         }
//         console.log(temp)

//     }
// }

// console.log(printSimpleStar(3))

// 1 
// 1 2
// 1 2 3
// 1 2 3 4
// jitna row utna element

// function printNum(n){
//     for(let i =1; i<=n;i++){
//         let temp = '';
//         for(let j=1; j<=i;j++){
//             temp = temp + j + " "
//         }
//         console.log(temp)
//     }
// }


// console.log(printNum(4))


// * * * *
// * * *
// * *
// *

// * * * * * * * --- Jend
// * * * * *
// * * * 
// *

//  y = mx + c
//  7 = -2 * 1 + c
//    9 =  c
// 9 - 2i

// 1 <= 6
//  jab bhi loop starting postion se start ho raha ho or or mujhe whole element itereate karna ho to less than use karte hai
// function star(n) {
//     for (let i = 1; i <= n; i++) {
//         let temp = ""
//         for (let j =1; j<= 9 - 2*i;j++) {
//             temp = temp + '* '
//         }
//         console.log(temp)
//     }
// }
// console.log(star(5))

// function star(n) {
//     for (let i = 1; i <= n; i++) {
//         let temp = ""
//         for (let j =1; j<= 6-i;j++) {
//             temp = temp + '* '
//         }
//         console.log(temp)
//     }
// }
// console.log(star(5))


// Meet John, a computer science student who is working on a project for his algorithms class.
//  One of the tasks he has been assigned is to write a function that takes in an integer n and 
//  returns the nth power of 2. For example, if n is 3, 
//  the function should return 8 because 2 to the power of 3 is 8.

// n ----> power

// function power(n){
//     // return Math.pow(2,6)
//     let temp =1;
//     for(let i=1;i<=n;i++){
//        temp = temp * 2
//     }
//     return temp;

// }
// console.log(power(2))

// Imagine you are a computer science teacher and one of your students, 
// Ben, is learning about loops and control structures. You decide to give him a problem to work on as practice.
// The problem is as follows: Ben needs to write a program that takes in an integer n as 
// input and prints out all the powers of 2 that are less than n. For example, if n is 10, 
// the program should print out 1, 2, 4, and 8.

// Input Format
// For each test case, you will be given n as an integer input from the user.
// Constraint

// 2 the pwer 1= 2
// 2          2 = 4
// 2          3 = 8
// 2          4 = 16;

// Constraint
// Sample Input 0

// 20

// Sample Output 0

// 1 2 4 8 16

function less(n){
    // let temp =[];
    for(let i =1;i<n;i = i*2){
    //    if(i**2 <= n){
        console.log(i)
    //    }`
    }
    // console.log(temp)
}
console.log(less(20))















