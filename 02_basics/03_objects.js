/**
 * There is Two way to delcare an Object
 * 1. As a Literal
 * 2. As a constructor
 * 
 * Note - When we create Object as literal then it's not create singleton but if we create Object as a constructor then it create singleton
 */

// If we want to create a key in object literal so we use symbol method

const mySym = Symbol("key1");

/**
 * Inside the Object there are two things first is key and second is value intresting thing is that key is also treat as a string but we define it without double qourt bcz of accessing that key in output so whenever we want to use values of object literal so we use with the dot or also can use inside ["keyname"] or [keyname]
 * 
 * Note but if we use symbole as a key then using "[ ]" is mendetory we will understand it further examples
 */

const JsUser = {
    name: "Devraj",
    [mySym] : "YourName",
    age: 28,
    location: "Jaipur",
    email: "dev@gmail.com"
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[mySym])

// Change Values of Object

// JsUser.age = 34
// console.log(JsUser)

// If we don't want to change object values so we can use freeze method of objects

// Object.freeze(JsUser)

JsUser.greeting = function(){
    console.log(`Hello Brother`);
}
// console.log(JsUser.greeting)-> It gives referance of function not gives function
console.log(JsUser.greeting())

JsUser.greetingTwo = function(){
    console.log(`Hello ${this.name} Brother`);
}

// console.log(JsUser.greetingTwo())