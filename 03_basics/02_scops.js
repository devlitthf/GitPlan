/**
 * In the any programming language including JavaScript we deal with scops there are two types of scops
 * 1. Global Scops
 * 2. Block Scops
 * 
 * data variables accessing always depends on scoping let's see further examples
 */
// let a = 400

// if(true){
//     let a = 30;
//     const b = 40;
//     var c = 400;
//     console.log(`This is inner value of scope: ${a}`)
// }
/**
 * Inside of if block scop decleard varible is not accessable outside of scop
 * only var is accessable outside of scope this is the drawback of var declaration
 * that's why we mostly avoid var type data declaration bcz it never follow scops rules.
 */
// console.log(`This is outter value of scope: ${a}`)
// console.log(b)
// console.log(c)
// ++++++++++++++++++++++++++++++Scope End++++++++++++++++++++++++++++++++++++++++

// =========================Nested Function=======================================

/**
 * According to nested function parent function can not use children function variables
 * but nested functions can use parent variables as like real world where parent can't use childrens assets 
 * but children can use parent assets
 */

// function one(){
//     const username = "Devraj"
    
//     function two(){
//         const website = "yoursite.com"
//         console.log(username)
//     }
    // console.log(website)
//     two()
// }

// one()

// if(true){
//     const username = "Dev"
//     if(username==="Dev"){
//         const website = "mysite.com"
//         console.log(`This site ${website} is created By ${username} `);
    // }
    // console.log(website);
// }
// console.log(username)

/**
 * We can call the fucntion after the declared function but when we store any function
 * in any expression(variable) the it is necessory that we call function in last let's see example
 */

console.log(addone(5))

function addone(num){
    return num + 2
}

// console.log(addTwo(5))

const addFunc = function addTwo(num){
    return num + 2
}
