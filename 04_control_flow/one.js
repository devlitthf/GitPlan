/**
 * If == It is a conditional base method what we use to boolean return base statement
 */
// const number = Number(100)

// if(number<=10){
//     console.log(`This is enough ${number}`)
// }else{
//     console.log(`This is not enough than ${100}`)
// }

// this is a multicondition base if 

const userLoggedIn = " "
const debitCard = " "

if(userLoggedIn && debitCard){
    console.log(`You can buy anything what you want`)
}else if(userLoggedIn == false || debitCard == false){
    console.log(`Please enter all the details for purchase`)
}else if(userLoggedIn != true || debitCard != true){
    console.log(`You cannot get enter winthout entery details`)
}else{
    console.log(`Enter detail first`)
}