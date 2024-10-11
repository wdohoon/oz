import { useState } from 'react';
import './App.css';

function App() {
    const [todoList, setTodoList] = useState([
        { id: 0, content: '자스' },
        { id: 1, content: '리액트' },
        { id: 2, content: '타스' }
    ]);

    return (
        <>
            <TodoList todoList={todoList} setTodoList={setTodoList} />
            <hr />
            <TodoInput todoList={todoList} setTodoList={setTodoList} />
        </>
    );
}

function TodoInput({ todoList, setTodoList }) {
    const [inputValue, setInputValue] = useState('');

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                onClick={() => {
                    const newTodo = { id: Number(new Date()), content: inputValue };

                    const newTodoList = [...todoList, newTodo];
                    setTodoList(newTodoList);
                    setInputValue('');
                }}
            >
                추가하기
            </button>
        </>
    );
}

function TodoList({ todoList, setTodoList }) {
    return (
        <ul>
            {todoList.map((todo) => (
                <Todo todo={todo} key={todo.id} setTodoList={setTodoList} />
            ))}
        </ul>
    );
}

function Todo({ todo, setTodoList }) {
    const [inputValue, setInputValue] = useState('');

    return <li>
        {todo.content}
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => {
            setTodoList(prev => prev.map((el) => el.id === todo.id ? { ...el, content: inputValue} : el))
        }}>수정</button>
        <button onClick={() => {
            setTodoList(prev => {
                return prev.filter(el => el.id !== todo.id)
            })
        }}>삭제</button>
    </li>;
}

export default App;
