// // code 1

// const t1 = performance.now()
// for(let i=1; i<=100; i++) {
//     let para = document.createElement('p');
//     para.textContent = "This is para" + i;
//     document.body.appendChild(para);
// }

// const t2 = performance.now();

// let para2 = document.createElement('h1');
// para2.textContent = t2 - t1;
// document.body.appendChild(para2);

// // performance 0.3999999761581421

// // code 2

// const t3 = performance.now()
// let mydiv = document.createElement('div');

// for(let i=1; i<=100; i++) {
//     let para = document.createElement('p');
//     para.textContent = "this is para " + i;
//     mydiv.appendChild(para);
// }

// const t4 = performance.now();

// let para3 = document.createElement('h1');
// para3.textContent = t4 - t3;

// document.body.appendChild(mydiv);
// document.body.appendChild(para3)

// // performance 0.10000002384185791



// best code
const t3 = performance.now()
let fragment = document.createDocumentFragment();

for(let i=1; i<=100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is para " + i;
    // no reflow and no repaint
    fragment.appendChild(para);
}

const t4 = performance.now();

let para3 = document.createElement('h1');
para3.textContent = t4 - t3;

document.body.appendChild(fragment);
document.body.appendChild(para3);

// performance 0.19999998807907104