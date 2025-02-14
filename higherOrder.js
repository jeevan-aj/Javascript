//Takeaway : If we are using block then we should return the result for the next iteration else it will be undefined

const data = [
    {name:'one',age:22},
    {name:'two',age:21},
    {name:'three',age:34},
    {name:'four',age:54},
]

// const mapsResult = data.map((cur) => {
//     return (cur.age)
// })

// console.log(mapsResult)


// const counts = data.reduce((acc,cur)=> {
//     if(cur in acc){
//         acc[cur.age]++
//     }else {
//         acc[cur.age] = 1
//     }
//     return acc
// },{})


//people with age less than

let counts = data.reduce((acc,cur) => {
    if(cur.age < 30){
        acc.push(cur.name)
    }
    return acc
},[])
console.log(counts)
