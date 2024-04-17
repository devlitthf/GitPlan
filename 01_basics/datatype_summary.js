// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt



// Reference (Non primitive)

// Array, Objects, Function

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 23234252135253151235n // to make a value bigInt we associate 'n' numbers last

// Reference (Non primitive)

// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// typeof value = object
// let myObj = {
    //  name: "hitesh",
    //  age: 22,
// }
// typeof value is function but we call all the referance (Non primitive) data type object function

// const myFunction =function(){
    // console.log("Hello world");
// }
// typeof value is function);

// ******************************************************

let myYoutubeName = "devrajraikwar.com"

let anotherName = myYoutubeName
anotherName = "hitropphy"

console.log(myYoutubeName)
console.log(anotherName)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "devraj@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);