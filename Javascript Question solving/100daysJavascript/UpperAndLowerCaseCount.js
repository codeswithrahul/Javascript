const str = "RahulChouh";
// count UpperCase and lowercase;

let upperCaseCount = 0;
let lowerCaseCount = 0;

for (let i = 0; i < str.length; i++) {
  if (/[A-Z]/.test(str[i])) {
    upperCaseCount++;
  } else if (/[a-z]/.test(str[i])) {
    lowerCaseCount++;
  }
}
console.log(upperCaseCount, lowerCaseCount);
