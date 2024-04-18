// Hosting is a javascript mechanism where we can access variable and function even before we intialise it.;

const obj = {
  name: "rahul",
  age: 18,
};

for (let elm in obj) {
  console.log(obj[elm]);
}

let nums = {
  a: 200,
  b: 300,
  c: true,
};

for (let elm in nums) {
  if (typeof nums[elm] === "number") {
    nums[elm] = nums[elm] * 2;
  }
}
// console.log(nums);

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

let userName = {
  names: "rahulchouhan",
  fullName: {
    firstName: "Sohan",
    lastName: "chouhan",
  },
};

const {
  names,
  fullName: { firstName },
} = userName;
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
