// console.log("hdello", "h"); --- > output : h ----> 2

function countOccurenceInChar(elm, findElm) {
  let map = {};
  elm = elm.toLowerCase();
  for (let element of elm) {
    if (map[element]) {
      map[element] = map[element] + 1;
    } else {
      map[element] = 1;
    }
  }
  return map
}

console.log("fucntion call",   ("helloH", "h"));
