//creates a returns a new function with the provided this value

let person1Details = {
    name:"jee",
    age:'23',
    job:'unemployeed',
    sayHi :function sayHi (par1,par2,par3){
        console.log("Hi" +" "+""+ this.name,par1,par2,par3)
    }
}

const sayHiFunc = person1Details.sayHi

const returnedSayHiFunc =sayHiFunc.bind(person1Details,"This is Bind Arg 1","This is bind arg 2")
returnedSayHiFunc()


//polyfill for bind
function myBind(thisArg,...parameters) {
    let callingFunction = this

    return function(){
        callingFunction.apply(thisArg,parameters)
    }
}

Function.prototype.myBind = myBind


const customFunc = sayHiFunc.myBind(person1Details,"This is Bind Arg 1","This is bind arg 2","1000")
customFunc()