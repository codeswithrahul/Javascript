// const data = [1,2,3] output ----> [1,2,4]
// const data = [1,2,9] output -----> [1,2,1,0]
// 1st edge case handled

function plusOne(arr) {
  const popp = arr.pop() + 1;
  arr.push(popp);
  return arr;
}

console.log(plusOne([1, 2, 5]));
