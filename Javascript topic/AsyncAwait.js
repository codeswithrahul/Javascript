/** What is async ?
 * Async is a keyword that is used before function to create async function.
 * Async function always return a promise
 * Async and await used to handle promises
 * either you return a promise function or if you don't return promise then it will wrap inside the promise then it will return it.
 **/

// eg:1 handle promise using then method

const p = new Promise((resolve, reject) => {
  resolve("promise has been resolved");
});

// Above code is returning a promise

/**
 * Returns a promise that resolves with the result of the asynchronous function.
 * @param {function} fn - The asynchronous function to execute.
 * @returns {Promise} A promise that resolves with the result of the asynchronous function.
 */
function async(fn) {
  // ...
}
// Above code is also returns a promise so it will not wrap inside promise it will give only one promise.
getUser().then(function (data) {
  console.log(data);
});

//

// eg : 2 handle promise using async await
const pro = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise has been resolved 2");
  }, 10000);
});

// await keyword can only be used inside async function

async function handlePromise() {
  const getVal = await pro;
  console.log("namaste js");
  console.log(getVal);
}

handlePromise();
// line no 37 what will be the output?
// most people think it will quickly print namaste js then it will wait for 
// 10 second to resolve the promise then it will print promise has been resolve 2
// but in answer lies here on 36 it will wait for 10second on line not 36 as soon as promise will resolve then it will print



