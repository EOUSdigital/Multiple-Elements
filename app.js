"use strict";

//TODO Step 5. Guided Practice

// 1. Select all tasks
const tasks = document.querySelectorAll('.task');

// 2. Log text content
tasks.forEach(task => {
    console.log(task.textContent);
});

//  3. Update each task so it becomes:
//      1) Learn DOM selectors,
//      2) Practice loops, etc.

tasks.forEach((task, index) => {
    task.textContent = `${index + 1}) ${task.textContent}`;
});

//  4. For every second task (index 1, 3, 5, …) add the class .highlight.

tasks.forEach((task, index) => {
    if (index % 2 === 1) {
        task.classList.add('highlight');
    }
});

//  5. Use getElementsByTagName('li') to select all <li> elements and:
//  • Convert the result to an array.
//  • Set their style.textTransform to 'uppercase'.

const liCollection = document.getElementsByTagName('li');
const liArray = Array.from(liCollection);

liArray.forEach(li => {
    li.style.textTransform = 'uppercase';
});

//! New Assignment

//  1. 

const tasks2 = document.getElementsByClassName('task');

