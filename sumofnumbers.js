/**
 *
 *
 */

const testNums = [1, 2, 3, 4];

function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}
console.log(sumFor(testNums));
//console.log("test");

function sumWhile(nums) {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i++;
  }
  return total;
}
console.log(sumWhile(testNums));

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}
console.log(sumRecursion(testNums));

function sumTheSimpleWay(nums) {
  let sum = 0;
  sum = _.reduce(nums, function(num1, num2) {
    return (num1 + num2);
  });
  return sum;
}
console.log(sumTheSimpleWay(testNums));