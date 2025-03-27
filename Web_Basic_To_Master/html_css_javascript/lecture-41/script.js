// console.log("Classes and Default Parameters");

// class human {
//     info(){
//         console.log("I am a human");
//     }

//     age() {
//         console.log("I am 25");
//     }

//     status(){
//         console.log("I am a student");
//     }
// }

// let a = new human();
// a.age();
// a.info();
// a.status();


// class human {
//     a;
//     #bt = "I am a student";
//     c = "I am a human";

//     // age() {
//     //     console.log("Age:", a);
//     // }

//     // current() {
//     //     console.log("Current:" , this.#bt);
//     // }

//     // info() {
//     //     console.log("Info:", this.c);
//     // }

//     get fetchage(){
//         return this.#bt;
//     }

//     set modifyweight(val) {
//         this.#bt = val;
//     }


//     constructor(newage, newheight, statusbar) {
//         this.a = newage;
//         this.c = newheight;
//         this.#bt = statusbar;
//     }

// }

// let a = new human(50, "Student","Teacher");
// console.log(a.c);
// console.log(a.fetchage);
// // a.age();
// // // a.current();
// // a.info();
// // a.modifyweight("I am a teacher");
// // a.fetchage("I am a teacher");



// function sayname(fname = "king".toLowerCase(), lname = "".toUpperCase()) {
//     console.log("My name is:",fname, "",lname);
// }

// sayname("Love", "Coding");


// function solve(value = ["love", "kunal", "rohit", "kholi"]) {
//     console.log("Hello jit -> ", value);
// }
// solve(undefined);

// function getage() {
//     return 190;
// }

// function ujtility(name, age= getage()) {
//     console.log(name,"", age);
// }

// ujtility();