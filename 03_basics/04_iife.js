/**
 * 1. IIFE - Immediatly Invoked Function Expression
 * 2. We create this function mostly to execute database file immediatly and also avoid global scope execution
 * Whenever we want function execution immediatly than we create IIFE function and other thing is that
 * IIFE helps to avoid Global scope polution in IIFY function Gloabal Scope never affects IIFY function
 * 3. We can aslo write arrow function to IIFE function but important thing is that we should rememmber that
 * previous function context ends with semicolon means we includ semicolon in the end of that function what comes first before
 * IIFE function
 */

// Syntax of IIFE function

(function iifyTest(){
    console.log("Hello IIFY");
})();
// =================Previous IIFE function===================================
(()=>{
    console.log("Hello There")
})()

// This is the syntax of IIFY function it's directly execute