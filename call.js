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
}

//calling printName with personDetails as its this
printName.call(personDetails)

//calling sayHi with its own this - normal
personDetails.sayHi()


//function borrowing : calling sayHi with this of person2Details
personDetails.sayHi.call(person2Details)



