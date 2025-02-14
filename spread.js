// function example(a, b, c) {
//     console.log(a,b,c)
//     return a + b + c;
// }
// var sampleArray = [1, 2, 3];
// console.log(example.apply(sampleArray));


const myName = { firstName: "Oluwatobi", lastName: "Sofela" , adresses:{country:'india',state:'kerala',house:{name:'name',color:'red'}} };
const bio = { ...myName,  country:"try" };
bio.adresses.house.color="pink"
console.log(bio);

// The invocation above will return:


