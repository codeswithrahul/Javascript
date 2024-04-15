const hello = {
  name: "rahul",
  email: "rahul@gmail.com",
};
hello["phone"] = "9304138016";
if (hello["phone"]) {
  hello["phone"] = hello["phone"] + 1;
}

let name = "raahula";

// let name = "raahula";

function hello(fullName) {
  let map = {};
  for (let elm of fullName) {
    if (map[elm]) map[elm] = map[elm] + 1;
    else map[elm] = 1;
  }

  return map;
}

console.log(hello(name));
