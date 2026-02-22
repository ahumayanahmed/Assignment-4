1. Difference between getElementById, getElementsByClassName, querySelector, and querySelectorAll

These methods are used to select elements from the DOM.
getElementById()
Selects an element using its id Returns only one element and Id must be unique

Example:
const element = document.getElementById("title");

getElementsByClassName()

Selects elements using class name and Returns multiple elements

Example:

const elements = document.getElementsByClassName("box");


querySelector()

Uses CSS selector ,Returns only the first matching element

Example:

const element = document.querySelector(".box");
querySelectorAll()
Uses CSS selector,Returns all matching elements

Example:
const elements = document.querySelectorAll(".box");

2. How to create and insert a new element into the DOM

There are 3 steps:

Step 1: Create element
const newElement = document.createElement("p");
Step 2: Add content
newElement.textContent = "Hello World";
Step 3: Insert into DOM
document.body.appendChild(newElement);

Example:
const p = document.createElement("p");
p.textContent = "This is new paragraph";
document.body.appendChild(p);


3. What is Event Bubbling? How does it work?

Event Bubbling is a process where an event starts from the child element and moves up to the parent elements.

Flow:
child → parent → body → html → document

Example:
<div id="parent">
  <button id="child">Click</button>
</div>
document.getElementById("child").addEventListener("click", function(){
  console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", function(){
  console.log("Parent clicked");
});
Output:
Child clicked
Parent clicked

Because event bubbled to the parent.

4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation means adding event listener to a parent element instead of multiple child elements.

It uses event bubbling.

Example:
document.getElementById("parent").addEventListener("click", function(e){
  if(e.target.tagName === "BUTTON"){
    console.log("Button clicked");
  }
});

Why useful:
Improves performance
Uses less memory
Works for dynamically added elements
Requires less code

5. Difference between preventDefault() and stopPropagation()
preventDefault()
Stops the default browser behavior.

Example:
document.querySelector("a").addEventListener("click", function(e){
  e.preventDefault();
});



stopPropagation()
Stops event bubbling.

Example:
button.addEventListener("click", function(e){
  e.stopPropagation();
});

