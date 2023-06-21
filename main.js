let toDoInput;
let errorInfo;
let addBtn;
let ulList;
let newTodo;
let popup;
let popupInfo;
let todoToEdit;
let popupInput;
let popupAddBtn;
let popupCloseBtn;
let todos = JSON.parse(localStorage.getItem('todos')) || [];

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	toDoInput = document.querySelector('.todo-input');
	errorInfo = document.querySelector('.error-info');
	addBtn = document.querySelector('.btn-add');
	ulList = document.querySelector('.todolist ul');
	popup = document.querySelector('.popup');
	popupInfo = document.querySelector('.popup-info');
	popupInput = document.querySelector('.popup-input');
	popupAddBtn = document.querySelector('.accept');
	popupCloseBtn = document.querySelector('.cancel');
};

const prepareDOMEvents = () => {
	addBtn.addEventListener('click', newTask);
	document.addEventListener('click', checkClick);
	popupCloseBtn.addEventListener('click', closePopup);
	popupAddBtn.addEventListener('click', changeTodoText);
	document.addEventListener('keyup', enterKeyCheck);
	renderTodosFromLocalStorage();
};

const saveTodoToLocalStorage = () => {
	const editRegex = /Edit$/;
	const todosWithoutEdit = todos.map((todo) => todo.replace(editRegex, ''));
	localStorage.setItem('todos', JSON.stringify(todosWithoutEdit));
};

const renderTodosFromLocalStorage = () => {
	todos.forEach((todo) => {
		newTodo = document.createElement('li');
		newTodo.textContent = todo;
		createToolsArea();
		ulList.append(newTodo);
	});
};

const newTask = () => {
	if (toDoInput.value !== '') {
		newTodo = document.createElement('li');
		newTodo.textContent = toDoInput.value;
		createToolsArea();
		ulList.append(newTodo);
		toDoInput.value = '';
		errorInfo.textContent = '';
		todos.push(newTodo.textContent);
		saveTodoToLocalStorage();
	} else {
		errorInfo.textContent = 'Wpisz treść zadania!';
	}
};

const createToolsArea = () => {
	const toolsPanel = document.createElement('div');
	toolsPanel.classList.add('tools');
	newTodo.append(toolsPanel);
	const completeBtn = document.createElement('button');
	completeBtn.classList.add('complete');
	completeBtn.innerHTML = '<i class="fas fa-check"></i>';
	const editBtn = document.createElement('button');
	editBtn.classList.add('edit');
	editBtn.textContent = 'Edit';
	const deleteBtn = document.createElement('button');
	deleteBtn.classList.add('delete');
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

	toolsPanel.append(completeBtn, editBtn, deleteBtn);
};

const checkClick = (e) => {
	if (e.target.matches('.complete')) {
		e.target.closest('li').classList.toggle('completed');
		e.target.classList.toggle('completed');
	} else if (e.target.matches('.edit')) {
		editToDo(e);
	} else if (e.target.matches('.delete')) {
		deleteTodo(e);
	}
};

const editToDo = (e) => {
	todoToEdit = e.target.closest('li');
	popupInput.value = todoToEdit.firstChild.textContent;
	popup.style.display = 'flex';
};
const closePopup = () => {
	popup.style.display = 'none';
};

// naprawić zapisywanie w ls !!!!!!!!!!!!!!!!!! =====================

const changeTodoText = () => {
	if (popupInput.value !== '') {
		todoToEdit.firstChild.textContent = popupInput.value;
		popup.style.display = 'none';
		popupInfo.textContent = '';
		saveTodoToLocalStorage();
	} else {
		popupInfo.textContent = 'Musisz podać jakąś treść';
	}
};
const deleteTodo = (e) => {
	const deletedElement = e.target.closest('li');
	const deletedTask = deletedElement.firstChild.textContent;
	deletedElement.remove();

	const todos = JSON.parse(localStorage.getItem('todos')) || [];
	const updatedTodos = todos.filter((todo) => todo !== deletedTask);
	localStorage.setItem('todos', JSON.stringify(updatedTodos));

	const allTodos = document.querySelectorAll('li');
	if (allTodos.length === 0) {
		errorInfo.textContent = 'Brak zadań na liście.';
	}
};

const enterKeyCheck = (e) => {
	if (e.key === 'Enter') {
		newTask();
	}
};

document.addEventListener('DOMContentLoaded', main);
