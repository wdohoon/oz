// server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let todos = [];
let currentId = 1;

// 할 일 목록 조회
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// 할 일 추가
app.post('/api/todos', (req, res) => {
  const { text } = req.body;
  const newTodo = { id: currentId++, text, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// 할 일 수정 (텍스트 또는 완료 상태)
app.put('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { text, completed } = req.body;
  const todo = todos.find(todo => todo.id === id);

  if (todo) {
    if (text !== undefined) todo.text = text;
    if (completed !== undefined) todo.completed = completed;
    res.json(todo);
  } else {
    res.status(404).json({ error: '할 일을 찾을 수 없습니다.' });
  }
});

// 할 일 완료 상태만 수정
app.patch('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { completed } = req.body;
  const todo = todos.find(todo => todo.id === id);

  if (todo) {
    if (completed !== undefined) todo.completed = completed;
    res.json(todo);
  } else {
    res.status(404).json({ error: '할 일을 찾을 수 없습니다.' });
  }
});

// 할 일 삭제
app.delete('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  res.status(204).send();
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
