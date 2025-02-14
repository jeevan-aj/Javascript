// const counter = () => {
//     let count = 0
//     const increaseCount =  () => {
//         count ++
//         console.log(count)
//     }

//     return increaseCount

// }

// const increaseCount = counter()
// increaseCount()//1
// increaseCount()//2
// increaseCount()//3

// creating private variables and methods , encapsulation
// function Bank() {
//   let balance = 100;

//   return {
//     addMoney: (value) => {
//       balance += value;
//       console.log(balance)
//     },

//     withdrawMoney: function (value) {
//       if (balance < value) {
//         console.log("No Sufficent balance",balance);
//         return
//       }

//       balance -= value;
//       console.log(balance);
//     },
//   };

// }

// let account = Bank();
// account.addMoney(10);
// account.withdrawMoney(90)
// account.withdrawMoney(20)
// account.withdrawMoney(20)
// withdrawMoney(100)


// memoize function using closure . 
// let expensiveFunction = function sum(a, b, c) {
//   if (arguments.length < 3) {
//     throw new Error("expected 3 arguments got" + arguments.length);
//   }

//   return a + b + c;
// };

// function memoize(expensiveFunction) {
//   let cache = {};

//   return function (...arg) {
//     if (arg.length < expensiveFunction.length) {
//       console.log("result not memoized");
//       try {
//         return expensiveFunction(...arg);
//       } catch (error) {
//         console.log("error occured");
//         return;
//       }
//     }

//     let key = JSON.stringify(arg);

//     if (key in cache) {
//       console.log("memoized result");
//       return cache[key];
//     } else {
//       console.log("not memoized");
//       let result = expensiveFunction(...arg);
//       cache[key] = result;
//       return result;
//     }
//   };
// }

// let memoizedFunction = memoize(expensiveFunction);

// try {
//   memoizedFunction(1, 1, 1);
//   memoizedFunction(1, 1, 1);
//   memoizedFunction(1, 1);
//   memoizedFunction(12);
// } catch (error) {
//   console.log(error?.message);
// }



// for( var i = 1 ; i<=5 ; i++){

//     function closed(i) {
//         setTimeout(()=> {
//             console.log(i)
//         },i*1000)
//     }

//     closed(i)
   
// }

