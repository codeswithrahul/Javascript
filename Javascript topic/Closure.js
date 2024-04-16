// Write a function rollCall that accepts an array of names and returns a function.
// The first time the returned function is invoked, it should log the first name to the console.
// The second time it is invoked, it should log the second name to the console, and so on,
// until all names have been called. Once all names have been called, it should log 'Everyone accounted for'.

// const rollCaller = rollCall(["Piyush", "Raj", "Suyash"]);
// rollCaller(); // ->  'Piyush'
// rollCaller(); // ->  'Raj'
// rollCaller(); // ->  'Suyash'
// rollCaller(); // ->  'Everyone accounted for'



// function rollCall(names) {
//   let count = 0;
//   return () => {
//     if (count < names.length) {
//       console.log(names[count]);
//       count++;
//     } else {
//       console.log("everyone encounterd");
//     }
//   };
// }

// const rollCaller = rollCall(["rahul", "mohan"]);
// console.log(rollCaller());


