const obj = {
    name: 'Alice',
    age: 25
  };
  
  Object.freeze(obj);
  
  obj.name = 'Bob'; // This will not change the name
  obj.gender = 'female'; // This will not add a new property
  delete obj.age; // This will not delete the age property
  
  console.log(obj); // Output: { name: 'Alice', age: 25 }


  const obj = {
    name: 'Alice',
    age: 25
  };
  
  Object.seal(obj);
  
  obj.name = 'Bob'; // This will change the name
  obj.gender = 'female'; // This will not add a new property
  delete obj.age; // This will not delete the age property
  
  console.log(obj); // Output: { name: 'Bob', age: 25 }