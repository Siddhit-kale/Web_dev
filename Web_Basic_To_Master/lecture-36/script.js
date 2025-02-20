// console.log("LOOPS AND STRING");

// for(var i=0; i<10; i++){

//     for(var j=10; j>1; j--){
//         console.log(j);
//     }
// }


let a = 5;
// while(a <10){
//     console.log(a);
//     a++;
// }

// do{
//     console.log(a);
//     a++;
// }
// while(a<10)

// for(var i=0; i<10; i++){
//     console.log(i);
//     if(i == 5){
//         continue;
//     }
// }


// for(var i=1; i<=10; i++) {
//     // console.log(i*2);
//     if((i % 2) == 0) {
//         console.log(i);
//     }
// }

// let i = 1;
// while(i < 5){
//     console.log("inside the while loop");
//     if(i==3){
//         i++;
//         continue
//     }

//     else{
//         console.log(i);
//     }
//     i++;
// }

// do{
//     console.log("inside the do while loop");
//     a++;
// }
// while(a<10);

// do{
//     console.log("yo hello world");
//     a--;
// }
// while(a>0);


let fname = "Siddhit";
let lname = 'siddhu';
let fullname = `my name is siddhit kale from vadodara`;
// console.log(fname, lname);
// console.log(fullname);

// for(var i=0; i<fname.length; i++){
//     console.log(fname[i]);
// }

// let fulln = fname + lname;
// console.log(fulln);

// console.log(`${fname}${lname}`);

console.log(fname.toUpperCase());
console.log(lname.toLowerCase());

console.log(lname.substring(2,5))

let splits = fullname.split(' ');
console.log(splits);