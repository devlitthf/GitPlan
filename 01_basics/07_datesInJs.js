/**
 * In this lesson we will learn about date function
 */

// let newDate = new Date()
// console.log(newDate)
// console.log(newDate.toDateString())
// console.log(newDate.toDateString()) 
// console.log(newDate.toLocaleString())

// let myCreatedDate = new Date(2022, 0, 22)
// This syntax only for Date we mention below statement

// let myCreatedDate1 = new Date(2022, 0, 22, 13, 6)
// This syntax (mm-dd-yy) we can use to mention time with date 
// console.log(myCreatedDate1.toLocaleString());

// let myCreatedDate = new Date("2022-01-11") 
// console.log(myCreatedDate.toLocaleString());

// We can also add timeStamp

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // This is use for Dates
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // This syntax is for exact value