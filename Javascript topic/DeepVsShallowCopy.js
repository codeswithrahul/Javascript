// const data = ["hello", "hi"];
// const data2 = data;
// data2[3] = "bye";
// console.log(data2);
// console.log(data);

// it will modify initial array as well (data);

// const user = {
//   firstName: "rahul",
//   lastName: "kumar",
// };

// const user2 = user;
// user.age = 28
// console.log(user2,user);

// it will also modify the initial object as well.

// shallow copy - It will copy only one level.

// Eg : 1

const user = {
  firstName: "rahul",
  lastName: "kumar",
};
const data = {};
Object.assign(data, user);
data.lastName = "chouhan";
// console.log(user, data);  { firstName: 'rahul', lastName: 'kumar' } { firstName: 'rahul', lastName: 'chouhan' }
// it will not modify the intial object

// Eg : 2 after ES6

const user4 = {
  firstName: "rahul",
  lastName: "kumar",
};

const user5 = { ...user, lastName: "chouhan" };
// console.log(user4, user5); { firstName: 'rahul', lastName: 'kumar' } { firstName: 'rahul', lastName: 'chouhan' }

// // Eg : 3
// const data = [1, 2, 3];
// const data2 = [...data, 4];
// console.log(data, data2);

// Most interesting part here , if we change pincode it will change for both people and copying so it will work on only one level,
//  it won't work for nested object or array

const people = {
  firstName: "rahul",
  address: {
    pinCode: "828204",
  },
};

const copying = { ...people };
copying.address.pinCode = "560078";

// console.log(people,copying);

//  deep copy --> we can achieve deep copy using structuredClone or using JSON.parse(JSON.stringify(morePeople)), it will not modify the initial object

const morePeople = {
  firstName: "rahul",
  address: {
    pinCode: "828204",
  },
};

const copyingMorePeople = structuredClone(morePeople);
copyingMorePeople.address.pinCode = "560078";
console.log(morePeople, copyingMorePeople);
