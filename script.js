// Event Bubbling or Event Capturing?


// eikhane outer ta agee kaj korche. to handle this use 'useCapture = true'
// document.getElementById('outer').addEventListener('click', function(){
//     console.log('I am outer');
// });
// document.getElementById('inner').addEventListener('click', function(){
//     console.log('I am inner');
// });

// 'useCapture = true'
document.getElementById('outer').addEventListener('click', function () {
    console.log('I am outer');
}, true);
document.getElementById('inner').addEventListener('click', function () {
    console.log('I am inner');
});






// Navigating Between Nodes

const child1 = document.getElementById('child1');
// console.log(child1.parentNode);

const parent = document.getElementById('parent');
// console.log(parent.parentNode);

// console.log(parent.childNodes);
// console.log(parent.childNodes[2]);
// console.log(parent.firstChild);
// console.log(parent.lastChild);
// console.log(parent.nextSibling);
// console.log(parent.previousSibling);

// console.log(child1.firstChild.nodeValue);



// insertBefore and replaceChild()
const element = document.getElementById('parent')
const child2 = document.getElementById('child2');

// const newPara = document.createElement('p').innerText = 'I am new para';
// console.log(newPara)

const newPara = document.createElement('p');
const node = document.createTextNode('I am new para');
newPara.appendChild(node);
// console.log(newPara)

// element.insertBefore(newPara, child2); // insertBefore

// element.replaceChild(newPara, child2); // replaceChild()