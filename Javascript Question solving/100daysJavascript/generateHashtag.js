// const data = "code in javascrript";
// output = "#CodeInJavscript";

//  first we will handle the empty string and length char..
//  2nd time we will iterate over the string
//  then we will replace the item ro we can use the charAT method
function HashTag(str) {
  if (str.length > 280 || str.trim().length === 0) return false;
  str = str.split(" ");
  str = str.map((data) => {
    // return data.replace(data[0], data[0].toUpperCase());
    // 2nd method
    return data.charAt(0).toUpperCase() + data.slice(1)
  });
  str = `#${str.join("")}`;
  return str;
}
console.log(HashTag("hello rahul"));
