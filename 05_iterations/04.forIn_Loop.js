// forIn
/**
 * We use forIn loop for objects it returns keys in normal iteration but if we want to get any object value also so we call object name with key for an example
 * 
 * for(const key in Object){
 *      console.log(key)
 * }
 * 
 * this will print only keys of object
 * 
 * for(const key in Object){
 *      console.log(Object[key])
 * }
 * 
 * This will return Object values
 * 
 * We can also use forIn loop for Array but it will return same like object. if we want to get values of array so we use second method of object for array also
 * 
 * NOTE:- forIn Loop is not iteratable for map and it will never show any error
 */

const newObj = {
    game1:"Spider-Man",
    game2:"Super-Man",
    game3:"NFS"
}

for (const key in newObj) {
    console.log(key)
}
// This will return only keys
// ================================
for (const key in newObj) {
    console.log(newObj[key])
}
// This will return object key-values
// ===============================