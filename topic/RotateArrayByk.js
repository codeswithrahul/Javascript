function rotate(nums, k) {
  for (let i = 0; i <= k; i++) {
    let lastRemove = nums.pop();
    nums.unshift(lastRemove);
  }
  return nums;
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 2));
