// There are four Promise API which is majorly important
// 1. Promise.all()
// 2. Promise.allSettled()
// 3. Promise.race()
// 4. Promise.any()


/**
 * 1. Promises.all() :
 *
 * It takes array of promises as input
 * let assume you have 3 api call and it will make 3 api call pararelly
 * let assume p1 takes  3sec to get the result and p2 - 1sec and p3- 2sec and assume all of them are success they did not failed.
 *
 *  **/
// promises.all([p1,p2,p3])
// in success case :
// it will takes 3 sec to call  all of the api and note it will wait for all of them to resolve
// result [val1,val2,val3]

// in failed case :
// note : assume first p1 get resolve and p2 got failed the As soon as promise  fails then it will always throw an error.immediately
// after 1s we will get error, it will not wait for another api to be resolved.

// Note : if any api fails then whole chain promises will fail automatically.

// 2. Promise.allSettled()
/**
 * Note: in success case it will behave like same as promises.all(). but
 * */
// promises.allSettled([p1,p2,p3])
/**in failure case : Suppose p1 takes 3sec to resolve the promises and p2  1sec and p3 - 2sec.
 * then assume p2 gets rejected in 1 sec so it will wait for all promise to- be 1sec and p3 - 2sec.
 * then assume p2 gets rejected in 1 sec so it will wait for all promise to setteled.
 * after 3 sec  the output wiil be = [val1,error,val2] 1sec and p3 - 2sec.
 * then assume p2 gets rejected in 1 sec so it will wait for all promise to
 */

// 3. Promise.race()
/**
 * As the name suggest The person who finish first then he will be winner.
 * let takes example of 3 promises  p1,p2 and p3 and p1 takes 3 sec and p2 - 1sec and p3 - 2second
 * success case :
 * whatever promise setteled first we will get the result here we will get the result of p2 and p2 is the first settled promise.
 */

// promises.race([p1,p2,p3])

// after 1 sec result = [val2]

// failure case : after 1 sec it will give the result = [error] . it will not wait for another promises to be resolved.

// 4. Promise.any()
/** - It will wait for first success then it will return that value.(seeking for first success)
 * We will wait for the first resolved.let assume  p1 takes 3sec and p2 - 1sec and p3 - 2second
 * if p2 becomes success then it will give value of p2. if p2 becomes fails and p3 become success then it will give value of p3.
 *
 *
 * what if every promises fails ?
 * - return result will be aggregate error. array of err result = [err1,err2,err3]
 */

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 is resolved");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P2 is rejected");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p3 is failed ");
  }, 2000);
});

const hello = Promise.all([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err));

const hello2 = Promise.allSettled([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => {
    console.error(err);
  });

const hello3 = Promise.race([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err));

const hello4 = Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err));

// console.log(hello);



