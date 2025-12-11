"use strict";

//TODO Step 5. Guided Practice (Your Turn)

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


