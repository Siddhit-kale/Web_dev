// // console.log("ASYNC-AWAIT");

// // async function getdata() {
// //     setTimeout(function() {
// //     console.log("I am inside set timeout block");
// //     }, 3000);
// // }

// // getdata();

// async function getdata() {
   
//     /// get request - async
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    
//     // parse json - async
//     let data = await response.json();
//     console.log(data);
// }

// getdata();


const myHeader = new Headers();
myHeader.append("Content-type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts/1/comments"; 


const options = {
    method: "POST",
    body: JSON.stringify({ username: "love code" }),
    headers: myHeader,
};

async function getdata() {
    const url = "https://jsonplaceholder.typicode.com/posts/2/comments";
    const response = await fetch(url);
    let data = await response.json();
    console.log("My data: " + data);
}

async function postData() {
    const url = await fetch(url, options);
    let data = await response.json();
    console.log("My data: " + data);
}

async function processData() {
    await postData();
    await getdata();
}
