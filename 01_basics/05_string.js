// const name = "Devraj"
// const repoCount = 50

// console.log(name + repoCount + "Value")
// This is not a right way to print variable and value

// console.log(`Hi this is me ${name} and my repo count is ${repoCount}`)
// This method we call string interpullation

const gameName = new String('devraj-is-great')
// String is not an array it is a KEY_VALUE_PAIR which mean we get string out with in a key form every particuler character will have an index

// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('v'));
// 
// const newStrig = gameName.substring(0,4)
// console.log(newStrig);
// 
// const anotherString = gameName.slice(-8,4)
// console.log(anotherString);
// 
// const newOne = "  devraj   "
// console.log(newOne);
// console.log(newOne.trim());
// 
// const url = "https://devraj.com/dev%20raikwar"
// 
// console.log(url.replace('%20','-'));
// console.log(url.includes('dev'));
/**
 * This all are prototype methods which we use to manupulate strings
 * Stringinterpullation
 */

console.log(gameName.split('devraj-is'))