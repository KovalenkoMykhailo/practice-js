var arithmeticSlices = function (nums) {
  let count = 0;
  let current = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
     
      current++;
      count = count + current;
      console.log(nums[i-2])
    } 
  }
  return count;
};
let nums = [1, 2, 3, 4, 5];
console.log("Arithmetic Slices", arithmeticSlices(nums));

let count = 0;
let current = 0;

for (let i = 2; i < nums.length; i++) {
  if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
    current = current + 1;
    count = count + current;
  } else {
    current = 0;
  }
}
return count;