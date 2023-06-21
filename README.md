# ToDo List App

This project is a simple ToDo List application built with HTML, CSS, and JavaScript. The app provides an interface for adding, editing, and removing tasks. The tasks are stored in the browser's local storage.
## Features

- Add new tasks
- Edit existing tasks
- Mark tasks as complete
- Delete tasks
- Tasks are stored in local storage
- Responsive layout

## How to use

1. Clone or download this repository.
2. Open the `index.html` file using extension like Live Server on VS Code.
3. Start adding tasks, editing them, marking them as completed, or deleting them.

## Code Structure

The JavaScript code in the `main.js` file is organized into several functions, each performing a specific task:

- `prepareDOMElements`: Initializes all the DOM elements that will be manipulated.
- `prepareDOMEvents`: Attaches event listeners to the relevant DOM elements.
- `newTask`: Creates a new task and adds it to the list.
- `createToolsArea`: Creates the tools (complete, edit, and delete buttons) for each task.
- `checkClick`: Handles click events on the tools of each task.
- `editToDo`: Displays a popup to edit the selected task.
- `closePopup`: Closes the popup.
- `changeTodoText`: Updates the task with the edited text.
- `deleteTodo`: Deletes the selected task.
- `enterKeyCheck`: Checks for the Enter key press to add a new task.

