// Using sum of two number;
var twoSum = function (numbers, target) {
  const map = new Map();
  for (const index in numbers) {
    const pairTarge = target - numbers[index];
    if (map.has(pairTarge)) return [index, map.get(pairTarge)];
    map.set(numbers[index], index);
  }
};

// Sum of Two number:
const sumInArray = function (arr) {
  return arr.reduce((a, b) => {
    return a + b;
  });
};

const arr = [2, 7, 11, 15];
const data = twoSum(arr, 9);
console.log(data);

console.log('Sum Array: ', sumInArray([23, 1, 2, 2]));
