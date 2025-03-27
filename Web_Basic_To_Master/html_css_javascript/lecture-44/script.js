// console.log("Error Handling");

// // compile time error
// // syntax error
// // console.log(1;


// // Runtime error
// // console.log(x);


// try {
//     console.log("try block start here");
//     //error 
//     console.log(x);
//     console.log("try block ends here");
// }
// catch(e) {

//     // if error seen in the code it enter into catch block
//     // define the message to show if an error occured 
//     // retry logic
//     //  fallback mechanism
//     //  logging
//     //  custom error

//     console.log("Oops there was an error in the code");
// }

// finally{

//     // if error comes or not finally block will run
//     console.log("I will run everytime, as i am finally block");
// }


// try{
//     // refrence error
//     console.log(x);
// }
// catch(e) {
//     throw new Error("Bhai phele declare karo, fer print karna");
// }


let errorcode = 100;
if(errorcode == 100) {
    throw new Error("Invalid json");
}