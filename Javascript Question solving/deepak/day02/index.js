//  Design a program to assign grades to students based on the following criteria:

// - Students scoring less than or equal to 50 should be awarded a "D" grade.

// - Students scoring above 50 but below 60 should receive a "C" grade.

// - Students with marks between 60 to 75 should be assigned a "B" grade.

// - Students scoring greater than 75 should be granted an "A" grade.


// Example:

// Suppose the program is given the following student scores:

// 45

// 58

// 70

// 80


// The program should output the corresponding grades for each student:

// D

// C

// B

// A


// function calculateGrade() {
//     let marks = 24;
//     if(marks <= 50) {
//         console.log("D");
//     }else if(marks < 50 && marks >60) {
//         console.log("c");
         
//     } else if(marks <=60 && marks <=65){
//         console.log("b");
//     } else {
//         console.log("A");
//     }

// }
// console.log(calculateGrade());


// 2.
// Question to Print 1 to N numbers using any Looping technique


// Note: Every number should be printed on a new Line

// Input

// A single line with integer N
// Constraints


// 1 <= N <= 1000


// Example:-

// Sample Input

// 5
// console.log("he")
// function lineIntegrar(){
//     for(let i =0; i<200;i++){
//     console.log(i+1);
//     }
// }
// console.log(lineIntegrar())

// 3.
// Print all odd numbers between 1 to N using any loop.


// Note: Every number should be printed on a new Line

// Input

// A single line with integer N


// Constraints

// 1 <= N <= 1000


// Example:-

// Sample Input

// 10


// Sample Output

// 1

// 3

// 5

// 7

// 9

// 0 < 15
// 1/2 = 1
// 0 %2 

// function printOdd(){
//     for(let i=0; i <=15;i++){
//         if(i%2 !== 0){
//             console.log(i)
//         }
//     }

// }

// printOdd();
// statement:

// Calculate the sum of all numbers between 1 and N (inclusive) that are multiples of a given integer X.


// Constraints:

//     1 <= N <= 10^5
//     1 <= X <= N

// Input Format:

// Two integers, N and X, separated by a space. N represents the upper limit of the range, and X represents the integer whose multiples need to be summed.

// Output Format:

// An integer representing the sum of all numbers between 1 and N that are multiples of X.


// Sample Examples:

// 1.

// Input: N = 10, X = 3

// Output: 18

// Explanation: The multiples of 3 between 1 and 10 are 3, 6, and 9. The sum of these multiples is 3 + 6 + 9 = 18.

// 2.

// Input: N = 20, X = 4

// Output: 60

// Explanation: The multiples of 4 between 1 and 20 are 4, 8, 12, and 16. The sum of these multiples is 4 + 8 + 12 + 16 = 40.


// function RangeMultiple(N,givenNumber){
//     let sum = 0;
//     for(let i =0; i<=N;i++){
//         if(i%givenNumber === 0){
//             sum = sum + i
//             // console.log(sum);
//         }
//     }
//     return sum;
// }
// RangeMultiple(30,2)
// 5.
// Generate and print the multiplication tables(only 10) for the numbers 2, 3, and 4  using loops. Each table should be space-separated integers, and each table should start on a new line.


// Constraints:

// The tables should be printed up to the 10th multiple.


// Input Format:

// No specific input is required as the tables are predefined for 2, 3, and 4.


// Output Format:

// Print the multiplication tables for 2, 3, and 4, each up to the 10th multiple. Each table should be space-separated integers, and each table should start on a new line.


// Examples : 


// Output :

// 2 4 6 8 10 12 14 16 18 20

// 3 6 9 12 15 18 21 24 27 30

// 4 8 12 16 20 24 28 32 36 40



// // 2 * 1 =2
// function printTable(){
//     for(let i = 1;i<=10;i++){
//         console.log(`2 * ${i} = ${2*i}  3 * ${i} = ${3*i} 4*${i} = ${4*i}`)
//     }
// }
// printTable()

// 1.
// By using while loop and continue statement

// Print all number from 1 to n but then it should not be divisible by 5


// Example:-

// Input:-

// n=7

// output:-

// 1

// 2

// 3

// 4

// 6

// 7
// function skip(){
//     for(let i =1 ; i<=21;i++){
//        if(i%5 === 0) {
//             break;
//        }
//        console.log(i);
//     }
// }
// skip()





// 2.
// Print the following series using while loop

// 1 4 9 16 25 36 …. n

// Input :-

// n = 49

// Output :-

// 1
// 4
// 9
// 16
// 25
// 36
// 49

// 1
// 8
// 27

// function printFollowing(){
//   for(let i = 1; i<=7 ; i++){
//       console.log(i**i);   
//   }
// }
// printFollowing()

// Write a program to print the digits of a number .

// Input:-

// N - 153 .

// output:-

// 3

// 5

// 1
let num = 153;
let stringg= num.toString();
// console.log(stringg.length)

// function reverse(){
//         for(let i =stringg.length-1;i>=0;i--){
//   console.log(stringg.charAt(i))
//     }
// }


// input;->456 
// output:->654
// console.log(reverse())

// n = 5;
// let i = 1;
// while(i<=5){
   
//   console.log(i)
//   i++;
// }

// let n = 153;
// function digitReve(){
//     while(n >= 0){
//         let digit = n % 10
//         console.log(Math.abs(digit));
//         n = n/10;
//     }

// }


// console.log(digitReve())

// // let n = 153;
// function digitReve(n) {
// //  15 > 0
// // 1 > 0
//     while (n > 0) {
//         let digit = n % 10;
//         // digit = 5
//         // digit = 3
//         // digit = 1
//         // console.log(Math.abs(digit)); ----> 3,5,1
//         // n = 153 
//         // n = Math.floor(n / 10);   ------> n = 15, n = 1; n = 0;
//     }
// }

// console.log(digitReve(n));

let n = 456;
let anser = 0;

function revd(n){
    while(n > 0){
        let digit = n % 10;
        // 6
        // 5
        // 4
        // console.log(Math.abs(digit))
        anser = anser * 10 + digit;
        n =  Math.floor(n / 10);
        // n = 45
        // n = 4
        // n = 0

    }
    console.log(anser);
}

console.log(revd(n))

// 6
// 5
// 4

// 654