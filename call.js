//call - call a function with a specific this 

let personDetails = {
    name:"jeevan",
    age:'23',
    job:'unemployeed',
    sayHi :function sayHi (){
        console.log("Hi" +" "+""+ this.name)
    }
}

let person2Details = {
    name:'naveen',
    age:'21',
    job:'intern',
}

function printName(){
    console.log(this.name)
    return
}

function logDetails(days,months,year){
    console.log(`Hello ${this.name} you are in ${year} ${months} ${days}`)
}

//calling printName with personDetails as its this
printName.call(personDetails)

//calling sayHi with its own this - normal
personDetails.sayHi()


//function borrowing : calling sayHi with this of person2Details
personDetails.sayHi.call(person2Details)


//reusing logDetails function  through technique function borrowing
//call can pass comma separated arguments that's the only difference with call and apply
logDetails.call(personDetails,16, 2, 2025)
logDetails.call(person2Details,16,2,2025)



