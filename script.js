// var div = document.createElement("div");
// var p = document.createElement("p");
// document.body.appendChild(div);
// p.innerText = "hi i am ganesg";
// div.appendChild(p);

//creation of Array

var div = document.createElement("div");
var h1 = document.createElement("h1");
var p = document.createElement("p");

div.setAttribute("class", "wrapper");
var arrayElements = [22, 34, 322, 1, 6, 8];

document.body.appendChild(div);
h1.innerText = "Array";
// p.innerText = "[]";
div.appendChild(h1);
div.appendChild(p);
p.innerHTML = arrayElements;

//array methods Push
// var push = arrayElements;
// console.log(push);
// push.innerText = 99;
// p.appendChild(push);
var div = document.createElement("div");
var h1 = document.createElement("h1");
div.setAttribute("class", "wrapper");
div.setAttribute("id", "push");
document.body.appendChild(div);
h1.innerText = "push( ) Method";
div.appendChild(h1);
var h2 = document.createElement("h4");
h2.innerText =
  "Inserting Number 5 using push() method and push method inserts elements in the last position of an Array.";
var p = document.createElement("p");
div.append(h2);
div.appendChild(p);
// div.appendChild(p);
// arrayElements.push(99);
console.log(arrayElements);
//p.innerHTML = arrayElements;
let pusharray = arrayElements;

console.log(pusharray);
pusharray.push(5);
console.log(pusharray);
//arrayElements.map((element) => {
// let p1 = document.createElement("p");
// console.log(pusharray);
//p1.innerText = pusharray;
document.querySelector("#push p").innerText = pusharray;
//});

// p.appendChild(push);

//pop method;
var div = document.createElement("div");
var h1 = document.createElement("h1");
div.setAttribute("class", "wrapper");
div.setAttribute("id", "pop");
document.body.appendChild(div);
h1.innerText = "pop( ) Method";
div.appendChild(h1);
var h2 = document.createElement("h4");
h2.innerText =
  "pop() method remove elements from the last position of an Array.";
var p = document.createElement("p");
div.append(h2);
div.appendChild(p);

let poparray = arrayElements;

console.log(poparray);
poparray.pop();
console.log(poparray);
document.querySelector("#pop p").innerText = poparray;

//shift method

var div = document.createElement("div");
var h1 = document.createElement("h1");
div.setAttribute("class", "wrapper");
div.setAttribute("id", "shift");
document.body.appendChild(div);
h1.innerText = "shift( ) Method";
div.appendChild(h1);
var h2 = document.createElement("h4");
h2.innerText =
  "shift() method remove elements from the First position of an Array.";
var p = document.createElement("p");
div.append(h2);
div.appendChild(p);

let shiftarray = arrayElements;

console.log(shiftarray);
shiftarray.shift();
console.log(shiftarray);
document.querySelector("#shift p").innerText = shiftarray;

//unshift method

var div = document.createElement("div");
var h1 = document.createElement("h1");
div.setAttribute("class", "wrapper");
div.setAttribute("id", "unshift");
document.body.appendChild(div);
h1.innerText = "unshift( ) Method";
div.appendChild(h1);
var h2 = document.createElement("h4");
h2.innerText =
  "unshift() method Adds elements to the First position of an Array.";
var p = document.createElement("p");
div.append(h2);
div.appendChild(p);

let unshiftarray = arrayElements;

console.log(unshiftarray);
unshiftarray.unshift(99);
console.log(unshiftarray);
document.querySelector("#unshift p").innerText = unshiftarray;
