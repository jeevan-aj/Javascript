//calls a function with a specific this 
//its almost similar to call the difference is that arguments is passed as an array

let person1Details = {
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


function printName(argument1,argument2){
    console.log(`${this.name} ${argument1} ${argument2}`)
}

printName.apply(person1Details,['hello','how are you ',2])