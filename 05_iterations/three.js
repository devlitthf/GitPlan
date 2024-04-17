// for of

/**
 * we can use forOf loop on array and objects
 */

// const arr = [1,2,3,4,5]

// for (const i of arr) {
//     console.log(i);
// }

// It can apply on string also

// const names = "Devraj Raikwar";

// for (const namer of names) {
//     console.log(namer);
// }

// Map
/**
 * Forof loop is applicable for map.
 * Map holds key-value pair so forOf loop work works with both values and keys also but
 * forOf loop syntax will change for map, in the place of iterater when we use key keyword. so we have to use key in square bracket
 * 
 *              for(const [key, value] of object){
 *                  // ForOf body
 *              }
 * 
 * forOf loop is not aplicable for object
 */

// const map = new Map();
// map.set('IN','INDIA');
// map.set('USA','United State Of America');
// map.set('UK','United Kingdom');

// console.log(map)

// for (const [key, value] of map) {
//     console.log(key, ":-" ,value)    
// }


// ===============================================
/** This object key-value pair can not iteratable for forOf loop */
// const newObj = {
//     game1: "Spider-Man",
//     game2: "NFS"
// }

// for (const [key, value] of newObj) {
//     console.log(key, value)    
// }
