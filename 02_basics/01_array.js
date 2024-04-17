// Array

const myArray = [1,5,9,2,4,5]
// console.log(myArray);

// const newArray = new Array("Man", "Woman")

// newArray.push("Old")
// newArray.pop()
// newArray.unshift("Animal")
// newArray.shift()

// console.log(newArray);

// const newArr = newArray.join() // This join method change type of array into "String"
// console.log(newArray);
// console.log(newArr);

// slice, splice

console.log("A Original Array" , myArray)
console.log("-------------------------------")

const myn1 = myArray.slice(1,4)
//slice method never includes last element in sliced array
console.log("Sliced array", myn1)
console.log("B Original Array after sliced" , myArray)
console.log("-------------------------------")

const myn2 = myArray.splice(1,4)
// splice method use to transfer some elements from original array to new array
console.log("Spliced array", myn2)
console.log("C Original Array after spliced", myArray);
