// const randomNum = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (i === 3) return arr[i]
//   }
// };
// const nums = [80,4,95,9]

// console.time("randomNum")
// console.log(randomNum(nums))
// console.timeEnd("randomNum")

// randomNum = 11.988ms

// function sumOfOperation(a) {
//     // 2 operation ----> O(1)
//    return  a * 2 + 1;
// }
// console.log(sumOfOperation(2))

// if code has constant number of operation everytime then time
// complexity will be O(1)

function goingUpDown(n) {
// it is related to n and it is increasing
  // total 2n + 3 operation ----> O(n)
  console.log("it started"); // 1 operation
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("Middle operation"); // 1 operation

  for (var j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("end"); // 1 operation
}
console.log(goingUpDown(n));
