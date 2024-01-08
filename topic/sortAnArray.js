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

const nums = [10,1, 4, 5, 2, 3,9];
function sortAna(nums) {
  debugger;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
}

console.log(sortAna(nums));

// const nums = [1, 4, 5, 2, 3];
// function sortAna(nums) {
//   debugger;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length - i; j++) {
//       console.log(nums[j]);
//     }
//   }
//   return nums;
// }

// console.log(sortAna(nums));
