// const myObj = new Object()
// // This is an constructor base object
// myObj.name = "Dev";
// myObj.age = 22;
// myObj.exeperince = "2 Year"

const myObje = {}
// // This is an normal constructor

myObje.name = "Devraj";
myObje.age = 27;
myObje.experience = "One Year"

// console.log(myObje)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const returnedTarget = Object.assign(target, source);63.

const newObj = Object.assign({}, obj1, obj2)
// console.log(newObj)

const users = [
    {
        id:1,
        email:"such@gmail.com"
    },
    {
        id:2,
        email:"are@gmail.com"
    },
    {
        id:3,
        email:"i@gmail.com"
    }
]

// console.log(users[1].email)
// console.log(myObje)

// console.log(Object.keys(myObje))
// console.log(Object.values(myObje))
// console.log(Object.entries(myObje))

// ====================================
// Destructuring of object
 const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Devraj"
 }

//  If you want to use one key value multiple times so you don't have to use this method

// course.courseInstructor = this is not a correct method

// This is a Destructering method to structure a object-
const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor)

// API also looks like json but it can have different types in array or object also
// This is an First Example
// {
//     "name": "Devraj",
//     "age": "99",
//     "location":"jbp"
// }

// This is an Second Example
// [
//     {},
//     {},
//     {}
// ]