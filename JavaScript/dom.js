//getting element by id
const msgid = document.getElementById("demo-id");
console.log(msgid);
//getting element by class
const msgclass = document.getElementsByClassName("demo-class");
console.log(msgclass);
//getting element by tagname
const msgtag = document.getElementsByTagName("p");
console.log(msgtag);
//getting element by name
const msgname = document.getElementsByName("btn");
console.log(msgname);
//using query selector
const msgidq = document.querySelector("#demo-query");
console.log(msgidq);
//using query selector all
const msgall = document.querySelectorAll(".demo-class");
console.log(msgall);
//getting only element in a container
const cont = document.getElementById("container");
const msgcont = cont.getElementsByClassName("demo-class");
console.log(msgcont);
//accessing parent node
const child = document.getElementById("child-node1");
console.log(child.parentNode);
//accessing child node
const parent = document.getElementById("parent-node");
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);
//creating a new element
let ele = document.getElementById('parent-node');
const ptag = document.createElement('p');
ptag.textContent="This is from js";
ele.appendChild(ptag);
console.log(ptag);
//create a new list item
let li = document.getElementById('list');
const newli = document.createElement('li');
newli.innerHTML="<li>Added from js</li>";
li.appendChild(newli);
li.prepend(newli);
console.log(li);
//using textContent
console.log(li.textContent);//It will display the text as it is.
console.log(li.innerText);//It shows with the style.
//after method
list.after(ptag, msgid);
//adjecthtml
li.insertAdjacentHTML("afterend","<p>This is added by insertAdjacentElement</p>");
//replacechild
let oldli = li.firstElementChild;
let newlii = document.createElement('li');
newlii.innerHTML="replaced item";
li.replaceChild(newlii,oldli);
//Clonenode
let cloneli = li.cloneNode(true);
let div = document.createElement('div');
div.appendChild(cloneli);
div.id="cloneli";
console.log(div);
document.body.appendChild(div);
//remove child
li.removeChild(li.firstElementChild);




