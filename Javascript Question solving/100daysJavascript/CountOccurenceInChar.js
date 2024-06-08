// console.log("hdelloH", "h"); --- > output : h ----> 2
function countOccurenceInChar(elm, findElm) {
  elm = elm.toLowerCase();
  if (elm.includes(findElm)) {
    let map = {};
    for (let element of elm) {
      if (map[element]) {
        map[element] = map[element] + 1;
      } else {
        map[element] = 1;
      }
    }
    return `${findElm} ---> ${map[findElm]}`;
  } else {
    console.log("ye word nahi hai bhai");
  }
}
console.log(countOccurenceInChar("helloH", "o"));










// Question :
const data = "aaAABBccBBB";
// output should be :
// a - 2;
// A - 2;
// B - 2;
// c - 2;
// B - 3;
