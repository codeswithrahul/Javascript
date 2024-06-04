//  splice method modify the existing array
// slice return a new array

// Reduce method
//  if we dont give dependency or acc it will neglect [0] index but if we put any value it will iterate all the elm.
//  if we dont give any dependency then it will print in acc -- first index [0]
// const data = [1, 2, 3];

// const accData = data.reduce((acc, data) => {
///   console.log(acc); 8 ,12 ,12
//   return 12;
// }, 8);

// if we dont give any dependency then it will print in acc -- first index [0]
// const data = [1852, 2, 3];
// const accData = data.reduce((acc, data) => {
//  console.log(acc); 188
// });

const data = [1, 2, 3];
const accData = data.reduce((acc, currElm) => {
  return acc + currElm;
}, 0);

// console.log(accData, "accData"); output is 5

// acc + currELm
// 0 + 1 = 1  now acc values is 1 and it will be keep updating
// 1 + 2 = 2
// 2 + 3 = 5 so now it will return 5
