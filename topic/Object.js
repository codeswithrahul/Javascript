// const hello = {
//   name: "rahul",
//   email: "rahul@gmail.com",
// };
// hello["phone"] = "9304138016";
// if (hello["phone"]) {
//   hello["phone"] = hello["phone"] + 1;
// }

// let name = "raahula";

// // let name = "raahula";

// function hello(fullName) {
//   let map = {};
//   for (let elm of fullName) {
//     if (map[elm]) map[elm] = map[elm] + 1;
//     else map[elm] = 1;
//   }

//   return map;
// }

// console.log(hello(name));

// delete keyword is used to delete property of an object, it will not delete a variable
const func =
  (function (a) {
    delete a;
    return a;
  },
  5);

var a = 5;
if (function abc() {}) {
  abc();
  a += 1;
  console.log(a);
} else {
  console.log("data is:- ", a);
}

function bca(a) {
  delete a;
  a += 1;
  return a;
}
console.log(bca(0));
// console.log(func); ----------> 5

const person1 = {
  firstName: "rahul",
  lastName: "kumar",
  "is my name rahul": true,
};
// console.log(person1['is my name rahul']);  -------> true

const property = "firstname";
const name = "rahul chouhan";

const obj = {
  [property]: name,
};
// console.log(obj.firstname || obj[property]); -------- > rahul chouhan

const person2 = {
  firstName: "rahul",
  lastName: "kumar",
};

for (let elm in person2) {
  // console.log(elm); -----> it will give key
  // console.log(person2[elm]); -------------> it will give ValueOfKey
}

const objNew = {
  a: "rahul", // it will replace by mohan because key name is same
  b: "rohit",
  a: "mohan",
};
// console.log(objNew); ------- > {a :"mohan", b : "rohit"}

// Question2.
// multiply all numeric property values of nums2

let nums = {
  a: 200,
  b: 300,
  title: true,
};

function multiplyByObj(obj) {
  for (let elm in obj) {
    if (typeof obj[elm] === "number") {
      obj[elm] *= 2;
    }
    console.log(obj[elm]);
  }
}

multiplyByObj(nums);




// Question 3
