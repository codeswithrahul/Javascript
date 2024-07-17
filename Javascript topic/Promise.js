/**
 * Promises are used to handle asynce operation in js
 *  A promise is an object, representing an eventual completation of an asynchronous operation.
 *  OR
 *  This promise object as a placeholder . which will be filled later with a value
 *
 */

const cart = ["shoes", "pants", "tshirt"];

// with callback
createOrderId(cart, function (orderID) {
  proceedToPayment(orderID);
});

// we cant depend on other server it might be possible it will call twice or it will not call.
// issue with inversion of control.

// with promise
// eg :1
const promises = createOrderId(cart);
promises
  .then(function (orderID) {
    return proceedToPayment(orderID);
  })
  .then(function (orderID) {
    return showOrderSummary(orderID);
  });

// eg : 2
const user = fetch("https://api.github.com/Rahulchouhan100");
user.then(function (data) {
  console.log(data);
});

// A promise has 3 states: pending | fulfilled | rejected.
// As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state
// {data : undefined} first it will in pending state once the promise is resolved then it will be filled some data to it.
// promise guarntee that it  will call once.
// it is immutable.
// in promise chaining other callback need above date so don't forget to write  return keyword.
