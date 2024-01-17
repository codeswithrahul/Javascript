const cart = ["shoes", "pants", "tshirt"];

const promises = createOrderId(cart);

promises.then(function (orderID) {
  return proceedToPayment(orderID);
});

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
