// const hello =  () =>{
//     try{
//         const data = fetch("https://fakestoreapi.com/products")
//         .then((res) => res.json())
//         .then(((r)=> console.log(r)))
//     }
//    catch(err){
//        console.log(err,"eerrrrrrrrrrrrrrrrrrrrr")
//    }
// }

// hello();

// Bubble sort
// - It compare two first element,if first number is higher it moves to the second place.

// const nums = [10,1, 4, 5, 2, 3,9];
// function sortAna(nums) {
//   debugger;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[j] > nums[j + 1]) {
//         [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
//       }
//     }
//   }
//   return nums;
// }

// console.log(sortAna(nums));

const nums = [10, 1, 4, 5, 2, 3, 9];
function sortAna(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] < nums[j]) [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  return nums;
}

console.log(sortAna(nums));

// Quick sort
// const nums = [10, 1, 4, 5, 2, 3, 9];
// function sortQuick(nums) {
//   if (nums.length <= 1) return nums;
  
//   let pivot = nums[0];
//   let right = [];
//   let left = [];

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] < pivot) {
//       left.push(nums[i]);
//     } else {
//       right.push(nums[i]);
//     }
//   }

//   return [...sortQuick(left), pivot, ...sortQuick(right)];
// }

// console.log(sortQuick(nums));
