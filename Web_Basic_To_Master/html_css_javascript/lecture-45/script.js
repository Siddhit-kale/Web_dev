// console.log("JS DOM Manipulation");

// console.log("DOM - Document object Model");

// console.log("BOM - Browser object Model");

/*
    document.getElementbyId("fpara");

    document.getElementbyId("fheading");

    document.getElementbyClass("textmatter");

    document.getElementbyTagname("p");

    document.queryselector('.textmatter');

    document.queryselector('p');

    $0

    let pata = $0

    let element = document.querySelector('#fdiv') 
undefined
element
<div id=​"fdiv">​…​</div>​
element.textContent
'\n        \n            This is my First\n            \n                Text\n            \n        \n        This is my second para\n    '
element.innerHTML
'\n        <p>\n            This is my First\n            <span>\n                Text\n            </span>\n        </p>\n        <p>This is my second para</p>\n    '
element.out
undefined
element.outerHTML
'<div id="fdiv">\n        <p>\n            This is my First\n            <span>\n                Text\n            </span>\n        </p>\n        <p>This is my second para</p>\n    </div>'
element.textContent
'\n        \n            This is my First\n            \n                Text\n            \n        \n        This is my second para\n    '
let heading = document.createElement('h1');
undefined
heading
<h1>​</h1>​
heading.text
undefined
heading.textContent = 'Hellp everyone';
'Hellp everyone'
heading
<h1>​Hellp everyone​</h1>​
let body = document.querySelector('body')
undefined
body
<body>​…​</body>​
body.appendChild('heading')
VM4130:1 Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
    at <anonymous>:1:6
(anonymous) @ VM4130:1Understand this errorAI
body.appendChild(heading)
<h1>​Hellp everyone​</h1>​
*/


let mydiv = document.querySelector('#mydiv');

// let element = document.createElement('span');
// element.textContent = "hello guys"

// mydiv.insertAdjacentElement('afterbegin', element);


let parent = document.querySelector('#mydiv');
let child = document.querySelector('#fpara');
parent.removeChild(child);