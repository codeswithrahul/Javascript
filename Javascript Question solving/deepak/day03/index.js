// // Write a program to print whether a given number is an Armstrong number or not..

// // (Armstrong number is a number in which all the sum of cubes of digits is equal to the number

// // Example:-

// // Input

// // n=153

// // Output

// // true




// function armStrong(n){
//     // let answer = 0;
//     let temp = n;
//     let sum= 0;
// if(n<0) return false;
//     while(n>0){
//         let digit = n % 10;
//         // digit = 3
//         // digit = 2
//         // digit = 1;

//         sum+=digit*digit*digit;
//         // sum = 27
//         // sum = 27 + 8 = 35
//         // sum = 35 + 1 = 36


//         // answer = answer * 10 + digit;
//         n = Math.floor(n/10) 
//         // n = 12
//         // 12/10 -- > 1
//         // 0
//     }
//     return sum === temp;
//   }

// console.log(armStrong(120))
// console.log(3**3)

// // Take length and breadth of the rectangle as input. And print area of the 
// // rectangle in the first line and perimeter of the rectangle in the second line.

// function rectangle(lenght,breadth){
//     let areaOfRectange = lenght * breadth;
//     let perimeter = (lenght + breadth) * 2;
//     console.log(`${areaOfRectange}\n${perimeter}`);

// }

// console.log(rectangle(14,20))


// You will be given two numbers of int data-type as input, and you have to
//  print the sum of their last digits as output.

// Test Case 1:

// Given Inputs: 2357 48986

// Expected Output: 13

// function lastDigitSum(a,b){
//     let sum = a%10 + b%10;
//     return sum;
// }

// console.log(lastDigitSum(2357,48986))
// You will be given four integer inputs x, y, z, w. Print True if x*y is equal to z*w and False otherwise.
// x->5
// y->8
// z->10
// w->4

// Sample Output 0

// True

function integarInput(x,y,z,w){
    if(x*y === z*w){
        return true;
    } else{
        return false;
    }

}

console.log(integarInput(5,8,10,5))