// // console.log("Events and Listeners");


// // function changeText() {
// // let fpara = document.getElementById('fpara');
// // fpara.textContent = "hello babbar";
// // }

// // function changeText2() {
// //     let fpara = document.getElementById('fpara');
// //     fpara.textContent = "hello jee";
// // }

// // let fpara = document.getElementById('fpara');

// // let button1 = document.getElementById('button1');
// // let button2 = document.getElementById('button2');

// // button1.addEventListener('click', changeText);

// // button2.addEventListener('click', changeText2);

// let anchor = document.getElementById('fanchor');

// anchor.addEventListener('click', function(event) {
//     event.preventDefault();
//     anchor.textContent = "Click done bhai";
// });

// let paras = document.querySelectorAll('p');

function alertpara(event) {

    if(event.target.nodeName === 'SPAN') {
    alert("you have clicke on para: " + event.target.textContent);
    }
    
}

// for(let i=0; i<paras.length; i++) {
//     let para = paras[i];
//     para.addEventListener('click', alertpara); 
// }


let mydiv = document.getElementById('wrapper');

document.addEventListener('click', alertpara);