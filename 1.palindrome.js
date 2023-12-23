// Quest 1- Palindrome Number:
//An integer is a palindorme when it read the same forward and backward.

// Input: x= 121 ---->>>> Output: true
// input x = 10 ---->>>> Output: false

const isPalindromw = function (x) {
  return x < 0 ? false : x === x.toString().split('').reverse().join('');
  // 121 -> "121" => ["1 ", "2", "1"]; => ["1", "2", "1"] => "121";
};

// Sample converting:
const Converting = function () {
  const num = 12212;
  const StrNum = num.toString();
  const StrSplit = StrNum.split('');

  return StrSplit;
};
console.log('converting', Converting());

const res = isPalindromw(100);
console.log(res);
