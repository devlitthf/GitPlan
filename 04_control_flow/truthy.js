// const userEmail = 'dev@gmail.com'
// const userEmail1 = ''
// const userEmail2 = []
// const userEmail3 = undefined
// const userEmail4 = null
// const userEmail5 = 0


// if(userEmail5){
//    console.log("True")
// }else{
//     console.log("False")
// }

// Truth Value
// "0", "false",[], {}, function(){}

// False Value
// 0, -0, BigInt = 0n, undefined, NaN, null, ""

const arr = []
if(arr.length === 0){
    console.log("Array is Empety")
}

const obj = {}
if(Object.values(obj).length === 0){
    console.log("Object is empty")
}

// Nullish Coalescing Operator (??): null undefined
/**
 * This operation work with null and undefined like if we working with two methods which is holded by one variable and we want to know what is exactly return from functions the we campare those functions value by '??' this operator let's understand this further example
 */

let val1;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 1

console.log(val1)
console.log(val2)
console.log(val3)

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80"): console.log("More than 80")