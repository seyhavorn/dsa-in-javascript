// How to check duplicate nomber from arra:
var containDuplicates = function (nums) {
  const map = new Map();
  for (const n of nums) {
    if (map.has(n)) return true;
    map.set(n, true);
  }

  return false;
};

const arr = [1, 34, , 7, 1, 34];
const result = containDuplicates(arr);
console.log(result);

// Using Set

var containerDup = function (numbers) {
  const set = new Set(numbers);
  return set.size !== numbers.length;
};

console.log('Using Set');

const result1 = containerDup(arr);
console.log(result);

// How to check container that has duplicate:
const dup = function (numbers) {
  const map = Map();
  for (let n of numbers) {
    if (map.has(n) === n) return true;
  }
};
