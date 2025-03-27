
// // // // let firstpromise = new Promise( (resolve, reject) => {
// // // //     console.log("Code");
// // // //     // resolve(1001);
// // // //     reject(new Error("Internal Server Error"));
// // // // });


// // // function saymyname() {
// // //     console.log("My name is siddhit");
// // // }

// // // setTimeout(saymyname, 15000);


// // let promise = new Promise( (resolve, reject) => {
// //     let success = true;
// //     if(success) {
// //         resolve("promise Fulfilled");
// //     }
// //     else{
// //         reject("Promise rejected");
// //     }
// // });


// // promise.then((message) => {
// //     console.log("first msg:" + message);
// //     return "Promise fulfilled second message";
// // }).then((message) => {
// //     console.log("second msg:" +message);
// //     return "Promise fulfuilled third message"
// // }).then((message) => {
// //     console.log("Thrid message: " + message);
// //     return "Promise fulfilled fourth message";
// // }).catch((error) => {
// //     console.log("Error:" +error);
// // }).finally((message) => {
// //     console.log("Finally will run doesn't matter the result");
// // })


// // // promise.then((message) => {
// // //     console.log("The ka Message is " + message);
// // // }).catch((error) => {
// // //     console.log("Error: " + error);
// // // })


// let promise = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "first");
// })
// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, "second");
// })
// let promis3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, "thrid");
// })

// Promise.all((promise, promise2, promis3))
// .then((values) => {
//     console.log("values: " + values);
// })
// .catch((error) => {
//     console.log("Errors: " + error);
// })