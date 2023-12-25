// Using Anagram : with array question:

var isAnagram = function (s, t) {
  return s.split('').sort().join('') === t.split('').sort().join();
};

const data = isAnagram('anangram', 'nanagram');
console.log('data', data);

// Another solution:
var isAna = function (s, t) {
  if (s.length !== t.length) return false;
  const map = new Map();
  for (const c of s) {
    if (map.has(c)) map.set(c, map.get(c) + 1);
    else map.set(c, 1);
  }

  for (const c of t) {
    if (!map.has(c)) return false;
    map.set(c, map.get(c) - 1);
    if (map.get(c) === 0) map.delete(c);
  }

  if (map.size() === 0) return false;

  return true;
};

const d = isAna('SEYHA', 'seyah');
console.log('another solution', d);
