//creates a returns a new function with the provided this value

let person1Details = {
    name:"jee",
    age:'23',
    job:'unemployeed',
    sayHi :function sayHi (par1,par2){
        console.log("Hi" +" "+""+ this.name,par1,par2)
    }
}

const sayHifunc = person1Details.sayHi

const returnedSayHiFunc =sayHifunc.bind(person1Details,"This is Bind Arg 1","This is bind arg 2")
returnedSayHiFunc()