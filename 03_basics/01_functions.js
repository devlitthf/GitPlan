//function addTwoNumber(number1, number2){
//    console.log(number1 + number2)
//}

// console.log(addTwoNumber(2,4))

// If we will try to get output value by calling function so it will print
// But if we will store this function in variable then it will gives undefined
// We have to set return variable inside function then it can be print by returning variable

//function addTwoNumber(number1, number2){
//    let result = number1 + number2
//    return result
//}

// console.log(addTwoNumber(3,4))

//function myName(username="sams"){
//    return `${username} just logged in`
//}
//console.log(myName())

// Set function parameter to take multiple values 
/**
 * This method called by two name according to usecase
 * 1.Rest operator
 * 2.Spred Operator
 */

function calculatNumbers(val1,val2, ...num1){
    return num1
}
// But now in this case we call it rest operator
console.log(calculatNumbers(200,300,500))

//--------------------Get Value By Objects-----------------------------------------
//This is the main object where we take values to function
const newObje = {
    username: "Devraj",
    age: 300
}

// we are using this function to get values from anyObject
function getValueOfObject(getObjValue){
    console.log(`Username is ${getObjValue.username} and age is ${getObjValue.age}`)
}

//getValueOfObject(newObje)
//We can also pass object values directly in function call
getValueOfObject({
    username: "Dev",
    age: 32
})
//==================================================================================

//--------------------Get Value by Array--------------------------------------------

const newArray = [244, 44, 448, 228]

function arr(getArraySecond){
    return getArraySecond[3]
}
console.log(arr(newArray))
console.log(arr([455, 555, 33 , 555]))