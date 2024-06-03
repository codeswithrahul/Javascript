// write a function findLongestword that takes a string as input and returns the t
// longest word in the string. If there are multiple longest words, return the first one encountered.

// Constraints:

// The input string may contain alphabetic characters, digits, spaces, and punctuation.
//  The Input string is non-empty.
// The input string may contain multiple words separated by spaces.

// Note:

//7 If the input string is empty or contains only whitespace, the function should return an false. //
// The function should ignore leading and trailing whitespace when determining the longest word.

//
// debugger;

// function findTheLongestWord(str) {
//   if(str.length.trim() === 0) return "str has no data"
//   let strSplit = str.split(" ");
//   let longestWord = 0;
//   for (let i = 0; i < strSplit.length; i++) {
//     if (strSplit[i].length > 0) {
//       longestWord = strSplit[i].length;
//     }
//   }
//   return longestWord;
// }
// console.log(findTheLongestWord("hello world javascript"));
//  it will return length

function findTheLongestWord(str) {
  if (str.trim().length === 0) return "str has no data";
  let strSplit = str.split(" ");
  strSplit.sort((a, b) => b.length - a.length);
  return strSplit[0];
}
console.log(findTheLongestWord("hello world javascript ertghjedrfghjertgh"));

// it will return word;
