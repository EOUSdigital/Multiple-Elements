"use strict";

//TODO Module 07. Lesson 05. DOM Selectors - Multiple Elements

//  In this lesson we move from selecting one element at a time to selecting groups of elements so we can style, modify, or remove them together. This builds directly on your work with arrays and loops in earlier modules.

//TODO Step 1. Recap: Single vs Multiple Element Selectors

//  So far you’ve used things like:

document.getElementById('main-title');                      //  single element
document.querySelector('.card')

//  These are ideal when you know you want just one element.

//  For many DOM tasks, however, we want to:
//  • Style all buttons.
//  • Add a class to every card.
//  • Update all list items.
//  For that, we need multiple-element selectors.

//TODO Step 2. The Main Multiple-Element Selectors

//? 2.1 document.querySelectorAll()

//  Signature

const elements = document.querySelectorAll('CSS selector');

//  • Accepts any valid CSS selector.
//  • Returns a NodeList (which is array-like and usually has forEach).
//  • The NodeList is static - id does not update automatically if the DOM changes.

//  Example: select all the list items with class .item

const items = document.querySelectorAll('.item');

items.forEach((item, index) => {
    item.textContent = `${index + 1}. ${item.textContent}`;
});

//  What is happening:
//  • We select all elements with .item.
//  • Loop with .forEach.
//  • Update their text to include an index.

//  You can use any CSS selector here:

document.querySelectorAll('p');                             //  select all <p> elements
document.querySelectorAll('.btn.primary');
document.querySelectorAll('ul li:nth-child(even)');
document.querySelectorAll('[data-role="card"]');

//? 2.2 document.getElementsByClassName()

//  Signature

const elements2 = document.getElementsByClassName('class-name');

//  • Returns an HTMLCollection (also array-like, but no forEach directly in older browsers).
//  • It is live - if elements with that class are added/removed, the collection updates automatically.

//  Example:

const buttons = document.getElementsByClassName('btn');

//  Convert to a real array to use array methods:
const btnArray = Array.from(buttons);

btnArray.forEach(btn => {
    btn.style.borderRadius = '9999px';
});

//? 2.3 document.getElementsByTagName()

//  Signature

const elements3 = document.getElementsByTagName('tag-name');

//  • Returns an HTMLCollection of all elements with that tag.
//  • Also love.

//  Example: make all <li> elements bold:

const listItems = document.getElementsByTagName('li');

Array.from(listItems).forEach(li => {
    li.style.fontWeight ='bold';
});

//? 2.4 Quick mention: getElementsByName()

//  Mostly used in forms:

const radios = document.getElementsByName('plan');

//  We will see it less often than the others, but it exists.


//TODO  Step 3. NodeList vs HTMLCollection

//  Both are array-like, but not real arrays:
//  • They have .length.
//  • You can access by index: items[0].
//  • You can iterate with for or for...of.

//  Key differences:

//* NodeList (from querySelectorAll)
//  • Often supports forEach directly:

items.forEach("...");

//  • Static: does not change when the DOM changes (in most cases).

//* HTMLCollection (from getElementsByClassName / getElementsByTagName)
//  • Does not reliably support forEach in older environments.
//  • Live: reflects changes in the DOM automatically.

//  To safely use array methods on either, you can convert to a real array:

const arr1 = Array.from(items);
const arr2 = [...items];                                    //  spread syntax

//  Then:

arr1.map("...");
arr1.filter("...");
arr1.forEach("...");

//  This is where your previous knowledge of array and higher-order methods becomes very powerful.


//TODO  Step 4. Practical Example: Zebra Striping a List

//  Imagine this HTML:

//  HTML can be found in index.html with class three

//  We want to:
//  • Add a light background to every second item.
//  • Add a number prefix to each item.

const tasks = document.querySelectorAll('.tasks .task');

tasks.forEach((task, index) => {
    // Add a number prefix
    task.textContent = `${index + 1}. ${task.textContent}`;

    // Zebra striping: even rows
    if (index % 2 === 1) {
        task.style.backgroundColor = '#f4f4f4';
    }
});

//  This is a classic pattern: select many → iterate → apply some logic.


//TODO  Step 5. Guided Practice (Your Turn)

//  Use a simple HTML file such as:

//  HTML can be found in index.html with class four

//  In app.js, complete the following steps.

//? Task 1 – Select and log
//  1. Select all elements with the class .task using querySelectorAll.
//  2. Log each task’s text content to the console.

//? Task 2 – Modify text with index
//  3. Update each task so it becomes:
//      1) Learn DOM selectors,
//      2) Practice loops, etc.






















