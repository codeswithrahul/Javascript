// Your magical function should determine whether the arrays are equal or not. If every element in both arrays aligns perfectly, the function should return a signal confirming their equality. If there are any disparities, the function should gracefully communicate this to the citizens of Equalityia.

// Example:

// Input:1

// 3 7 2 8 6

// 3 7 2 8 6

// Output

// True

// input:2
// 5
// 1 2 3 4 5
// 5
// 1 2 3 4 6

// output : false

// input:3
// 6
// 6 5 4 3 2 1
// 6
// 1 2 3 4 5 6

// output: false

// input:4

// 8
// 2 4 6 8 10 12 14 16
// 7
// 2 4 6 8 10 12 14

// output: false

// input:5

// 7
// -1 -5 -8 4 0 8 4
// 7
// -1 -5 -8 4 0 8 4

// output: true

// input: 6

// 4
// 0 0 0 0
// 4
// 0 0 0 0

// output: true
// Explanation: (3, 7, 2, 8, 6). The magical function inspects both arrays and joyously signals True, confirming that every element aligns perfectly. The harmony of Equalityia remains intact.

// [1,2,3] = [1,2,3] ---> true
// [1,2,3] = [3,2,1] --> false

// function arr(val1, val2) {
//   return val1.join("") === val2.join("");
// }

// arr([1, 2, 3], [1, 2, 3]);
// order and elm and length

// function hello(val1, val2) {
//   if (val1.length !== val2.length) return false;
//   for (let i = 0; i < val1.length; i++) {
//     if (val1[i] !== val2[i]) return false;
//   }
//   return true;
// }

// console.log(hello([1, 2, 3], [1, 2, 3]));
// min : 1
// min = 2;
// 0 max =2
// min : 3

function hello12(val1) {
  let max = 0;
  let min = 0;

  for (let i = 0; i < val1.length; i++) {
    if (val1[i] === 1) {
      min++;
    } else {
      max = Math.max(max, min);
      min = 0;
    }
  }
  max = Math.max(max, min);
  return max;
}

console.log(hello12([1, 1, 2, 1, 2, 3]));
const input = [
  { name: "jone" },
  { name: "jone" },
  { name: "rahul" },
  { name: "rohit" },
];
//  output :
// [
//   { name: 'jone', count: 2 },
//   { name: 'rahul', count: 1 },
//   { name: 'rohit', count: 1 }
// ]

const countMap = {};

for (let i = 0; i < input.length; i++) {
  const item = input[i];
  if (countMap[item.name]) {
    countMap[item.name].count += 1;
  } else {
    countMap[item.name] = { name: item.name, count: 1 };
  }
}

const output = Object.values(countMap);

console.log(output);
