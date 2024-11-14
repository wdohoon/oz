// todo.js
document.addEventListener('DOMContentLoaded', () => {
  const todoInput = document.getElementById("todo-input");
  const addTodoBtn = document.getElementById("add-todo-btn");
  const todoList = document.getElementById("todo-list");

  const API_URL = "http://localhost:3000/api/todos";

  // 할 일 목록 조회
  async function fetchTodos() {
    try {
      const response = await axios.get(API_URL);
      const todos = response.data;

      // 기존 리스트 초기화
      todoList.innerHTML = "";

      // 문서 프래그먼트를 사용하여 성능 개선
      const fragment = document.createDocumentFragment();

      todos.forEach(todo => {
        const li = document.createElement("li");
        li.textContent = todo.text;
        li.classList.toggle("completed", todo.completed);

        // 완료 체크박스
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;
        checkbox.onchange = () => toggleTodoCompleted(todo.id, checkbox.checked);

        // 수정 버튼
        const editBtn = document.createElement("button");
        editBtn.textContent = "수정";
        editBtn.onclick = () => updateTodoText(todo.id);

        // 삭제 버튼
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "삭제";
        deleteBtn.onclick = () => deleteTodo(todo.id);

        // 요소 조합
        li.prepend(checkbox);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        fragment.appendChild(li);
      });

      todoList.appendChild(fragment);
    } catch (error) {
      console.error("할 일 목록을 불러오는데 실패했습니다:", error.message);
    }
  }

  // 할 일 추가
  addTodoBtn.addEventListener("click", async () => {
    const text = todoInput.value.trim();
    if (!text) return;

    try {
      await axios.post(API_URL, { text });
      todoInput.value = "";
      fetchTodos();
    } catch (error) {
      console.error("할 일을 추가하는데 실패했습니다:", error.message);
    }
  });

  // 할 일 수정
  async function updateTodoText(id) {
    const newText = prompt("새로운 할 일을 입력하세요:");
    if (!newText) return;

    try {
      await axios.put(`${API_URL}/${id}`, { text: newText });
      fetchTodos();
    } catch (error) {
      console.error("할 일을 수정하는데 실패했습니다:", error.message);
    }
  }

  // 할 일 완료 토글
  async function toggleTodoCompleted(id, completed) {
    try {
      await axios.patch(`${API_URL}/${id}`, { completed });
      fetchTodos();
    } catch (error) {
      console.error("할 일 완료 상태를 변경하는데 실패했습니다:", error.message);
    }
  }

  // 할 일 삭제
  async function deleteTodo(id) {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchTodos();
    } catch (error) {
      console.error("할 일을 삭제하는데 실패했습니다:", error.message);
    }
  }

  // 초기 데이터 로드
  fetchTodos();
});
