// 상수 정의
const TODO_FORM_ID = 'todo-form';
const TODO_INPUT_ID = 'todo-input';
const TODO_LIST_ID = 'todo-list';

// Todo 타입 정의
type Todo = {
    id: string; // 고유 식별자
    task: string; // 할 일 내용
    completed: boolean; // 완료 여부
};

// Todo 상태 배열
let todos: Todo[] = [];

// DOM 요소를 가져오는 함수 정의
function getElementById(id: string): HTMLElement | null {
    return document.getElementById(id);
}

// 로컬 스토리지 저장 함수
function saveToLocalStorage(): void {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// 로컬 스토리지에서 불러오기 함수
function loadFromLocalStorage(): void {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
        todos = JSON.parse(savedTodos) as Todo[];
    }
}

// Todo 추가 함수
function addTodo(task: string): void {
    const newTodo: Todo = {
        id: Date.now().toString(),
        task,
        completed: false,
    };
    todos.push(newTodo);
    saveToLocalStorage();
    renderTodos();
}

// Todo 삭제 함수
function deleteTodo(id: string): void {
    todos = todos.filter((todo) => todo.id !== id);
    saveToLocalStorage();
    renderTodos();
}

// Todo 상태 업데이트 함수
function updateTodo(id: string): void {
    todos = todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    saveToLocalStorage();
    renderTodos();
}

// Todo 렌더링 함수
function renderTodos(): void {
    const todoList = getElementById(TODO_LIST_ID) as HTMLElement;
    if (!todoList) return;

    // Clear existing todos
    todoList.innerHTML = '';

    todos.forEach((todo) => {
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';

        const taskSpan = document.createElement('span');
        taskSpan.textContent = todo.task;
        taskSpan.style.textDecoration = todo.completed ? 'line-through' : 'none';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTodo(todo.id);

        const toggleButton = document.createElement('button');
        toggleButton.textContent = todo.completed ? 'Undo' : 'Complete';
        toggleButton.onclick = () => updateTodo(todo.id);

        todoItem.appendChild(taskSpan);
        todoItem.appendChild(toggleButton);
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);
    });
}

// 폼 제출 이벤트 핸들러
function handleFormSubmit(event: Event): void {
    event.preventDefault();
    const todoInput = getElementById(TODO_INPUT_ID) as HTMLInputElement;
    if (todoInput && todoInput.value.trim()) {
        addTodo(todoInput.value.trim());
        todoInput.value = '';
    }
}

// DOM 로드 후 초기화
document.addEventListener('DOMContentLoaded', () => {
    const todoForm = getElementById(TODO_FORM_ID) as HTMLFormElement;
    if (todoForm) {
        todoForm.onsubmit = handleFormSubmit;
    }
    loadFromLocalStorage();
    renderTodos();
});
