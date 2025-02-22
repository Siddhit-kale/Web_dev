// console.log("types: object && arrays");

// let object = {
//     name: "John",
//     age: 30,
//     weight: 55,
//     height: "6ft 1in",
//     geet: function() {
//         console.log("hello jee kaise ho");
//     }
// };

// console.log(object);
// object.geet();

// console.log(typeof{object});

// let obj2 = object;
// console.log(obj2);

// let arr = [
//     12,
//     "name",
//     true,
//     null,
//     geet = function() {
//         console.log("this is the function");
//     }
// ];

// // console.log(arr[0], arr[1]);

// let barry = new Array(1,2,3,4,5);

// barry.push(6);
// barry.push(7);
// barry.pop(3);
// barry.unshift('love babbar');
// console.log(barry.slice(2,4));
// console.log(barry.splice(1,2,'kunal'));

// console.log(barry);


// let arr = [10,20,30];

// arr.map((number,index) => {
//     console.log(number);
//     console.log(index);
// } )

// let arr = [10,20,30,11,21,44,51];

// let evenarray = arr.filter((number) => {
//     if(number % 2 === 0){
//         return true;
//     }
//     else {
//         return false;
//     }
// });

// console.log(evenarray);

// let arr = [1,2,'love', 'kunal', null];

// let ans = arr.filter((value) => {
//     if(typeof(value) === 'string') {
//         return true;
//     }
//     else{
//         return false;
//     }
// });

// console.log(ans);



// let arr = [10,20,30,40];

// let ans = arr.reduce((acc,curr) => {
//     return acc + curr;
// }, 0);

// console.log(ans);



// let arr = [9,1,7,4,2,8];
// arr.sort();

// console.log(arr);

// console.log(arr.indexOf(3));

// let arr = [10,10,10,10];

// let length = arr.length;
// console.log("length:" , length);

// arr.forEach((value, index) => {
//     console.log("Number:" + value + " Index:" + index);
// })


// for(let index=0; index < length; index++) {
//     console.log(arr[index]);
// }


// for(let key in Obj) {
//     console.log(key, " ", onj[key]);
// }


// let arr = [10,20,30,40];

// for(let value of arr) {
//     console.log(value);
// }


let arr = [10,20,30,40,50];

function getsum(arr) {
    // let len = arr.length;
    // let sum = 0;
    // for(let index = 0; index<len; index++) {
    //     sum = sum + arr[index];
    // }

    // return sum;

    let sum =0;
    arr.forEach((value) => {
        sum = sum + value;
    })
    return sum;
}

let totalsum = getsum(arr);
console.log(totalsum);