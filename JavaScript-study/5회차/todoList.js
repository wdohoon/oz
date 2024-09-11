const todoList = document.getElementById('todo-list');
const todoForm = document.getElementById('todo-form');
let todoArr = [];

// 로컬 저장소에 저장하기
function saveTodos() {
    const todoString = JSON.stringify(todoArr);
    localStorage.setItem("myTodos", todoString);
}

// 로컬 저장소에서 가져오기
function loadTodos() {
    const myTodos = localStorage.getItem("myTodos");
    if (myTodos !== null) {
        todoArr = JSON.parse(myTodos);
        displayTodos();
    }
}
loadTodos();

// 삭제하기
function handleTodoDelBtnClick(clickedId) {
    todoArr = todoArr.filter(function (aTodo) {
        return aTodo.todoId !== clickedId;
    });
    saveTodos();
    displayTodos();  // 삭제 후 리스트를 다시 표시
}

// 수정하기
function handleTodoItemClick(clickedId) {
    todoArr = todoArr.map(function (aTodo) {
        if (aTodo.todoId === clickedId) {
            return {
                ...aTodo, todoDone: !aTodo.todoDone
            };
        } else {
            return aTodo;
        }
    });
    saveTodos();
    displayTodos();
}

// 보여주기
function displayTodos() {
    todoList.innerHTML = ""; // todoList 초기화는 반복문 밖에서 실행

    todoArr.forEach(function (aTodo) {
        const todoItem = document.createElement('li');
        const todoDelBtn = document.createElement('span');
        todoDelBtn.textContent = 'x';
        todoItem.textContent = aTodo.todoText;
        todoItem.title = "완료";

        // 기존 클래스 제거 후 새로운 클래스 추가
        todoItem.classList.remove("done", "yet");
        if (aTodo.todoDone) {
            todoItem.classList.add("done");
        } else {
            todoItem.classList.add("yet"); // 'yet' 클래스를 사용하지 않거나, 스타일을 추가
        }

        todoDelBtn.title = "삭제";

        todoItem.addEventListener("click", function () {
            handleTodoItemClick(aTodo.todoId);
        });

        todoDelBtn.addEventListener("click", function (e) {
            e.stopPropagation(); // 삭제 버튼 클릭 시 완료 이벤트가 발생하지 않도록 방지
            handleTodoDelBtnClick(aTodo.todoId);
        });

        todoItem.appendChild(todoDelBtn);
        todoList.appendChild(todoItem);
    });
}

todoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const toBeAdded = {
        todoText: todoForm.todo.value,
        todoId: new Date().getTime(),
        todoDone: false
    };
    todoForm.todo.value = "";
    todoArr.push(toBeAdded);
    displayTodos();
    saveTodos();
});
