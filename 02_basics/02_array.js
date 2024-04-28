const marval_heros = ["Spider-Man", "Thor", "Iron-Man"]
const dc_heros = ["Flash","Batman", "Superman"]

/**
 * IF we want to merg these two arrays so we can use two methods
 * 1. concat -> these method generate new array Example newArray.concat(newArray2)
 * 2. spread -> we can use spread method with "..." when we want to merge array element
 * we include these three dots before the all those array which we want to merge in one array and
 * concat those arra with , then it generate new array with merged elements
 */

// const mArray = marval_heros.concat(dc_heros)
// console.log(mArray);

// const nArray = [...dc_heros, ...marval_heros]
// console.log(nArray)

const ArrayOne = [1,4,5,[7,7,4,3,[10,33,24,56]]]
const flatArray = ArrayOne.flat(Infinity) // This is a flat method which spread inside elements of any array with depth declation
console.log(flatArray);

// console.log(Array.isArray("Devraj"))
console.log(Array.from("Devraj")) // Array.from method convert any type of data into array inside of an Array.from()
console.log(Array.from({name: "Devraj"})) // if we declare object inside of Array.from() method so we have to define that we need key base value conversion 

/**
 * If we have multiple value so we use Array.of(variable) method this method generate new array set of elements
 */

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))