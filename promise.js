let wallet = {
  balance: 0,
};

function createOrder(orderId, price) {
  return new Promise(function (resolve, reject) {
    if (orderId) {
      let order = {
        message: "payment made for" + orderId,
        orderId,
        price,
      };
      resolve(order);
    } else {
      reject("order failed to create");
    }
  });
}

function proceedToPayment(orderId, price) {
  return new Promise(function (resolve, reject) {
    if (orderId) {
      let paymentDetails = {
        orderId: orderId,
        name: "jeevan",
        price,
      };
      resolve({
        message: "payment made for" + orderId,
        paymentDetails: paymentDetails,
      });
    } else {
      reject("payment failed for " + orderId);
    }
  });
}

function showOrderSummary(orderId, paymentDetails) {
  return new Promise(function (resolve, reject) {
    if (orderId && paymentDetails) {
      let orderSummary = {
        orderId,
        paymentDetails,
        message: "order Summary created successfully",
      };
      resolve(orderSummary);
    } else {
      reject("orderSummary failed for " + orderId);
    }
  });
}

function updateWallet(orderSummary) {
  return new Promise((resolve, reject) => {
    if (orderSummary) {
      wallet.balance = orderSummary?.paymentDetails?.price;
      let updationDetails = {
        message: "wallet updated",
        balance: wallet.balance,
      };
      resolve(updationDetails);
    } else {
      reject("wallet not updated");
    }
  });
}

// createOrder(2, 100)
//   .then((orderDetails) =>
//     proceedToPayment(orderDetails?.orderId, orderDetails?.price)
//   )
//   .then((paymentDetails) =>
//     showOrderSummary(
//       paymentDetails?.paymentDetails?.orderId,
//       paymentDetails?.paymentDetails
//     )
//   )
//   .then((orderSummary) => updateWallet(orderSummary))
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// Promise.all([createOrder(),proceedToPayment(2, 2)])
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));

//  function sample() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("promise resolved hi");
//     }, 5000);
//   });
// }

// console.log("i am outer")
// async function useSample() {
//     const data =await sample()
//     console.log("i am first")
//     console.log(data)
// }

// useSample()



