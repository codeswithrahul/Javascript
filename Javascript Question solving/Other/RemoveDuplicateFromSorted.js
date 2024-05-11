// 1st approach we can use set method

// function removeDuplicate(arr){
//     const rmvDup = Array.from(new Set(arr))
//     console.log(rmvDup);

// }

// console.log(removeDuplicate([1,2,3,4,5,5,5,])
// )

function removeDuplicate(arr) {
  let map = {};
  for (let elm of arr) {
    console.log(elm);
  }
}

console.log(removeDuplicate([1, 3, 4, 4, 5, 5, 8, 9]));
