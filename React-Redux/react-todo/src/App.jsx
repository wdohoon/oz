import {useEffect, useRef, useState} from 'react'
import './App.css'

function App() {
    const [todo, setTodo] = useState([
        {
            id: Number(new Date()),
            content: '안녕하세요'
        }
    ])


    return (
        <>
            <Clock/>
            <TodoInput setTodo={setTodo}/>
            <TodoList todo={todo} setTodo={setTodo}/>
        </>
    )
}

const Clock = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, [])

    return (
        <div>
            {time.toDateString()}
        </div>
    )
}

const formatTime = (seconds) => {
    return `
    ${String(Math.floor(seconds / 3600)).padStart(2, "0")}:
    ${String(Math.floor((seconds % 3600) / 60)).padStart(2, '0')}:
    ${String(seconds % 60).padStart(2, '0')}
    `;
}

const StopWatch = () => {
    const [time, setTime] = useState(0);
    const [isOn, setIsOn] = useState(false);

    useEffect(() => {
        if (isOn === true) {
            setInterval(() => {
                setTime((prev) => prev + 1)
            }, 1000)
        }
    }, [])

    return (
        <div>
            {formatTime(time)}
            <button>{isOn ? "끄기" : "켜기"}</button>
            <button>리셋</button>
        </div>
    )
}

const TodoInput = ({setTodo}) => {
    const inputRef = useRef(null)
    const addTodo = () => {
        const newTodo = {
            id: Number(new Date()),
            content: inputRef.current.value,
        }
        setTodo((prev) => [...prev, newTodo]);
    }

    return (
        <>
            <input
                type="text"
                ref={inputRef}
            />
            <button onClick={addTodo}>추가</button>
        </>
    )
}

const TodoList = ({todo, setTodo}) => {
    return (
        <>
            <ul>
                {todo.map((el) => (
                    <Todo key={todo.id} todo={el} setTodo={setTodo}/>
                ))}
            </ul>
        </>
    )
}

const Todo = ({todo, setTodo}) => {
    return (
        <>
            <li>
                {todo.content}
                <button onClick={() => {
                    setTodo(prev => prev.filter(el => el.id !== todo.id))
                }}>
                    삭제
                </button>
            </li>
        </>
    )
}

export default App
