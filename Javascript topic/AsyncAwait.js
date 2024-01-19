/** What is async Await?
 * Async is a keyword that is used before function to create async function and await is a keyword that will used to handle promises.
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
  console.log("callings");
  const getVal = await pro; // js engine will waiting for promise to be resolved
  console.log("namaste js");
  console.log(getVal);
}

handlePromise();
// line no 46 what will be the output?
// most people think it will quickly print namaste js then it will wait for
// 10 second to resolve the promise then it will print promise has been resolve 2
// but in answer lies here on 41 it will wait for 10second on line not 41 as soon as promise will resolve then it will print
// namaste js then promise has been resolved 2

// eg : 3

async function handlePromise() {
  console.log("callings");

  const getVal = await pro; // js engine will waiting for promise to be resolved
  console.log("namaste js");
  console.log(getVal);

  const getVal2 = await pro; // js engine will waiting for promise to be resolved
  console.log("namaste js2");
  console.log(getVal2);
}

handlePromise();

// what will be the output?
// first it will print callings
// After 10 seconds both promise will be resolve at once
// Callings - namaste js - promise has been resolved 2 - namaste js2 - promise has been resolved 2

// eg : 3

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise has been resolved 1");
  }, 10000);
});

const p2 = new Promise((res, reject) => {
  setTimeout(() => {
    res("promise 2 has been resolved 2");
  }, 5000);
});

async function handlePromises() {
  console.log("inside  async function");
  const val = await p1;
  console.log("Namaste Javascript 1");
  console.log(val);

  const val2 = await p2;
  console.log("Namaste Javascript 2");
  console.log(val2);
}
handlePromises();

// Line not 92 await p1 this will wait for 10 second to resolve it but another promises should be executed in 5 sec
// but it will not work like that it will wait for 10 second to resolve the first promise then after it will print 2nd promise
// Output : inside async function - Namaste 1 - promise has been resolved 1 - Namaste 2 - promise has been resolved 2
// what if we will change the order of promise first is 5sec and another promise is 10 second?
//
// it will behave differently if we change the order so output will be  : -
// Inside a function
// after 5 sec it will print Namaste javascript 1
// promise has been resolved 1
// after 10 sec it will print Namaste Javascript 2
// Promise has been resolved 2

// eg : 4

const API_URL = "https://api.github.com/users/rahulchouhan100";

async function handleAPIcall() {
  try {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
  } catch (err) {
    console.log(err);
  }

  //fetch () => Response.json() => jsonValue   Note : json returns promise
  // once the promise is resolved then fetch will give response object has a body which is a readble stream if we want to convert
  // readle stream to json so we will use .json() and json again return a promise.
}

handleAPIcall();
