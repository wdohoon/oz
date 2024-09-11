// 페이지가 로드될 때 Local Storage에서 저장된 할 일 목록을 불러옵니다.
document.addEventListener('DOMContentLoaded', loadTodos);

// '추가' 버튼 클릭 시 할 일을 추가하는 이벤트를 등록합니다.
document.getElementById('add-btn').addEventListener('click', function () {
    const todoInput = document.getElementById('todo-input');
    const newTodoText = todoInput.value.trim();

    // 입력된 텍스트가 비어있지 않은지 확인합니다.
    if (newTodoText !== '') {
        addTodoItem(newTodoText);
        saveTodoToLocalStorage(newTodoText);
        todoInput.value = ''; // 입력 필드를 초기화합니다.
    } else {
        alert('할 일을 입력해 주세요!');
    }
});

// '전체 삭제' 버튼 클릭 시 모든 할 일 항목을 삭제하는 이벤트를 등록합니다.
document.getElementById('clear-btn').addEventListener('click', function () {
    // Local Storage를 초기화합니다.
    localStorage.removeItem('todos');

    // 화면에 표시된 모든 할 일 항목을 삭제합니다.
    document.getElementById('todo-list').innerHTML = '';
});

// 할 일 항목을 추가하는 함수입니다.
function addTodoItem(text) {
    const li = document.createElement('li');

    // 체크박스 생성 및 설정
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo-checkbox';
    checkbox.onclick = function () {
        this.parentElement.classList.toggle('completed');
    };

    // 텍스트 노드 생성 및 설정
    const span = document.createElement('span');
    span.textContent = text;

    // 삭제 버튼 생성 및 설정
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function () {
        this.parentElement.remove();
        removeTodoFromLocalStorage(text);
    };

    // 요소들을 li에 추가
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // 할 일 목록에 li 추가
    document.getElementById('todo-list').appendChild(li);
}

// Local Storage에 할 일 목록을 저장하는 함수입니다.
function saveTodoToLocalStorage(todo) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Local Storage에서 할 일 목록을 삭제하는 함수입니다.
function removeTodoFromLocalStorage(todo) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.filter(item => item !== todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// 페이지 로드 시 Local Storage에 저장된 할 일 목록을 불러오는 함수입니다.
function loadTodos() {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => addTodoItem(todo));
}

// TO-DO 리스트를 드래그 앤 드롭으로 정렬할 수 있도록 합니다.
new Sortable(document.getElementById('todo-list'), {
    animation: 150,
    ghostClass: 'sortable-ghost'
});
