// ForEach

/**
 * forEach loop contain callback function, index and array and we can use it for array and object also
 * forEach loop is a higherOrder function so it's a prototype function of an array. We can use foreach function by including dot with specified array name
 * 
 */

const coding = ["My", "Name", "is", "Devraj"]

// coding.forEach( function (items) {
//     console.log(items);
    // Which function is calling inside forEach loop that is callback function as a form of arrow functon and the function is working inside array that's why it's parameter autometically get item or values of coding array
// });

// This is a second variation to write forEach loop
// coding.forEach( (items) => {
//     console.log(items);
// });

// We can also pass referance of any function as a parameter in forEach function also

// This is the function what we will pass referance of function to forEach loop
function printMe(item){
    console.log(item)
}

coding.forEach(printMe)
