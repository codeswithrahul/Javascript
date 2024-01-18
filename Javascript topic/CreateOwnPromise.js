const cart = ["shoes", "pants", "tshirt"];

const promises = createOrderId(cart);

promises
  .then(function (orderID) {
    console.log(orderID);
    return orderID;
  })
  .then(function (orderID) {
    return proceedToPayment(orderID);
  })
  .then(function (transaction) {
    console.log(transaction);
  })
  .catch(function (err) {
    // if the promise failed then we have to handle error gracefully. because it gives silently error on browser.
    console.log(err.message);
  })
  .then(function (milGyapayment) {
    console.log("no matter what it will be called");
  });

// if we are passing callback function one to another function (chaining). don't forget to write return keyword.
// any error come up in any promise so that catch will handle automatically.
// after the catch block , call back will be called no matter what happens in above code or promise.

function createOrderId() {
  const pr = new Promise(function (resolve, reject) {
    // logic for createOrder

    // eg :
    if (!validCart(cart)) {
      const err = new Error("not validated");
      reject(err);
    }

    // logic for create order

    const orderID = "123455";
    if (orderID) {
      resolve(orderID);
    }
  });

  return pr;
}

// Resolve and reject arguments given by javscript by design of promise API.
// if we are passing callback function one to another function (chaining). don't forget to write return keyword.
