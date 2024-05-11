function rotate(nums, k) {
  for (let i = 0; i <= k; i++) {
    let lastRemove = nums.pop(); 
    // pop  returns last 3 element and it will store in lastRemove variable
    nums.unshift(lastRemove);
    // unshift will add that last 3 element in first
  }
  return nums;
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 2));


