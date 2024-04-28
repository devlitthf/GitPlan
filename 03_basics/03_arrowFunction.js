// const user = {
//     username: "Dev",
//     age: 22,
//     Welcome: function welcomeMsg(){
//         console.log(`${this.username}, Welcome here`)
//         console.log(this)
//     }
// }

// user.Welcome()
// user.username = "Sam Bahadur"
// user.Welcome()

// This will return windows object in browser not in editor
// console.log(this)

// function sample(){
//     console.log(this)
// }

// sample()

//This function will return undefined bcz of calling this inside of function without context details
// const sample = function(){
//     let username = "Devraj"
//     console.log(this.username)
// }

// sample()

// Arrow function syntax

const sample = () => {
    let username = "Dev"
    console.log(this)
}

// sample()

/**
 * This is explicit return method of arrow function where we include curly bracket and use
 * return keyword to get return
 * 
 * There is another method of arrow function that is implicit return where we don't write function inside
 * of curly bracket and also we can avoid return but one change always apply in implicit that is 
 * we write function in one line to better understand let's see in further examples
 */
const addTwo = (num1, num2) => {
    return num1 + num2
}

// console.log(addTwo())

const addOne = (num1, num2) => num1 + num2

// We can write function method inside "parentheses" and can avoid "return" keyword
// const addOne1 = (num1, num2) => (num1 + num2)
// const addOne2 = (num1, num2) => 
// num1 + num2

// When we return object in return then we defined like 
const addOne2 = (num1, num2) => ({username: "Devraj"})
console.log(addOne2(4,5))

