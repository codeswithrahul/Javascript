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
// console.log(bca(0));
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

// const data = "hello";
// console.log([...data]);

// Question 3

// destructuring in object

let userName = {
  names: "rahulchouhan",
  fullName: {
    firstName: "Rahul",
    lastName: "chouhan",
  },
};

const { names } = userName;
console.log(userName);

const data = "hello";
// console.log([...data]); ---> ['h','e','l','l','o']

const setting = {
  userName: "rahul123",
  skill: 5,
  level: 10,
};
const storeData = JSON.stringify(setting, ["skill", "level"]);
// console.log(storeData);  --> {"skills" : 5,"level":5} ---> this will only stringfy that data which is in array

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

// console.log(shape.diameter()); ---> 20 this this refer to shape
// console.log(shape.perimeter()); NaN ----> here are arrow function so this refer to window object.

// destructuring in object and nested destructuring

// let userName = {
//   names: "rahulchouhan",
//   fullName: {
//     firstName: "Sohan",
//     lastName: "chouhan",
//   },
// };

// const {
//   names,
//   fullName: { firstName },
// } = userName;
// console.log(names, firstName);

// console.log({a:1} ===  {a:1});
// console.log({a:1} ==  {a:1});  --> both cases false because they are different object and they have different memory space

// how to deep / clone an object

let goodUser = {
  name: "hul",
  age: 26,
};
console.log(goodUser);
const objClone = { ...goodUser };
objClone.name = "rahul";
console.log(hello);

// 2nd method to clone
const objClone = Object.assign({}, goodUser);

// 3rd method to clone
const objClone = JSON.parse(JSON.stringify(goodUser));

// what is shallow copy : one object holds the reference to another object
//  Deep copy : when we completely clone an object in to an another variable that is called deep copy
