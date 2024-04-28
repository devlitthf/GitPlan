// const score = 400;
// console.log(score);
// 
// const balance = new Number(100);
// console.log(balance);
// 
// console.log(balance.toString().length);
// console.log(balance.toFixed(1));
// 
// const otherNumber = 23.65234
// 
// console.log(otherNumber.toPrecision(4));
// 
// const hundreds = 1000000
// 
// console.log(hundreds.toLocaleString('en-IN'));

// ****************** Maths ********************************

// console.log(typeof Math);
// console.log(`This is the absolute value of Integer number only ${Math.abs(-234.89)}`)
// console.log(`This is the round figure value by round method ${Math.round(43.50)}`);
// console.log(`This is Ceil Method Average value in Increased scale ${Math.ceil(4.3)}`);
// console.log(`This is Floor Method Average value in Decreased scale ${Math.floor(4.5)}`);
// console.log(`This is the minimum value in array form ${Math.min(4,3,5,10)}`);
// console.log(`This is the maximus value in array form ${Math.max(4,3,5,10)}`);

console.log(`${Math.random()}`);
console.log(`${(Math.random()*10) + 1}`);
console.log(`${Math.floor(Math.random()*10) + 1}`);

const min = 10
const max = 20

console.log(`${Math.floor(Math.random() * (max - min + 1)) + min}`)