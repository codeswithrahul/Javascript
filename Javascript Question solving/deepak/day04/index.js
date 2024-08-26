// // console.log("test");
// // multiply the last digits of the given inputs
// // a=1234
// // b=1256
// // c=6397

// function multiplyByLastDigit(a,b,c){
//     let lastDigit = (a%10) * (b%10) * (c%10);
//    console.log(lastDigit)
//    console.log(5*5)

// }
// console.log(multiplyByLastDigit(1234,1256,6397))


// Input Format:

// An integer 'N' representing the upper limit of the range for which the sum needs to be calculated.


// Output Format:

// An integer, representing the sum of all numbers from 1 to N.


// Sample Examples:

// 1.

// Input: 5

// Output: 15

// Explanation: The sum of numbers from 1 to 5 is 1 + 2 + 3 + 4 + 5 = 15.

// function addNumber(n){
//     let sum = 0;
//     for(let i = 1; i<=5;i++){
//         sum = sum +i;
//     }
//     return sum;

// }

// console.log(addNumber(5))




// Input Format:

// An integer N representing the upper limit of the range.


// Output Format:

// Print all perfect squares between 1 and N, separated by spaces.
// Sample Examples:

// 1.
// Input: N = 15
// Output: 1 4 9
// Explanation: The perfect squares between 1 and 15 are 1, 4, and 9.

//  N = 20;
// 4 = 16
// function perfectSqure(n){
//     for(let i =1; i<=n;i++){
//         if(i*i < n){
//             console.log(i*i)
//         }
//     }
// }
// console.log(perfectSqure(15))


// Two integers, N and X, separated by a space. N represents the upper limit of the range, and X represents the integer whose multiples need to be summed.

// Output Format:

// An integer representing the sum of all numbers between 1 and N that are multiples of X.


// Sample Examples:

// 1.

// Input: N = 10, X = 3

// Output: 18

// 1
// 2
// 3 --->3
// 4
// 5
// 6 --->3
// 7
// 8
// 9 ----> 3
// 10


// function multiplyNumber(n,x){
//     let sum = 0;
//     for(let i =1; i<=n; i++){
//         if(i%3 === 0){
//             sum = sum + i;
//         }
//     }
//     return sum;
// }
// console.log(multiplyNumber(10,3))


// The bonus in a company is given by Bonus= Salary * (5 / 100). 
// A company decided to give a bonus of 5% to employees if his/her years of service is more than 5 years. 
// Ask user for their salary and year of service and print the net bonus 
// amount. If the years of service is less than or equal to 5, print 0, otherwise print Bonus calculated.
// Input Format
// For each test case, you will be given Salary of the user in the first line as an integer input. Years of service in the second line as an integer input.
// Constraints
// 0<=salary<=2^20 0<=years of service<=2^20
// Output Format
// Print the bonus of the employee in the integer format.
// Sample Input 0
// 20000
// 6
// Sample Output 0
// 1000

// function bonousCalculate(salary,completedYear){
//     if(completedYear < 5) return console.log("0");
//      let bonous = salary * (5/100);
//      let totalBonous = bonous + salary
//      console.log(bonous,"bonous")
// }

// console.log(bonousCalculate(20000,5))



// A shop will give a discount of 10% on the total cost if the cost of the quantity purchased is more than 1000. a. Ask user for the number of units b. Suppose, one unit will cost 100. c. Judge and print total cost for the user in the integer format.

// Input Format

// For each test case, You will be given the number of units in the integer format.

// Constraints

// 0<=number of units<=2^20-1

// Output Format

// You have to print the final cost of the quantities.

// Sample Input 0

// 15

// Sample Output 0

// 1350




