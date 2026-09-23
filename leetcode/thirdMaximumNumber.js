var thirdMaximumNumber = function (nums) {
  const numbers = new Set(nums);
  const sortedNumbers = Array.from(numbers).sort((a, b) => b - a);

  if (sortedNumbers.length >= 3) {
    return sortedNumbers[2];
  } else {
    return sortedNumbers[0];
  }
};
let nums = [3, 3, 4, 2, 1];
console.log("Third Maximum Number", thirdMaximumNumber(nums));
