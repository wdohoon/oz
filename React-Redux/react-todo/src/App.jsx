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
            <Timer/>
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
    const timerRef = useRef(null);

    useEffect(() => {
        if (isOn === true) {
            const timerId = setInterval(() => {
                setTime((prev) => prev + 1)
            }, 1000);
            timerRef.current = timerId;
        } else {
            clearInterval(timerRef.current);
        }
    }, [isOn])

    return (
        <div>
            {formatTime(time)}
            <button
                onClick={() => setIsOn((prev) => !prev)}
            >
                {isOn ? "끄기" : "켜기"}
            </button>
            <button
                onClick={() => {
                    setTime(0);
                    setIsOn(false);
                }}
            >
                리셋
            </button>
        </div>
    )
}

const Timer = () => {
    const [startTime, setStartTime] = useState(0);
    const [isOn, setIsOn] = useState(false);
    const [time, setTime] = useState(0);
    const timerRef = useRef(null);

    useEffect(() => {
        if (isOn && time > 0){
            const timerId = setInterval(() => {
                setTime((prev) => prev - 1)
            }, 1000);
            timerRef.current = timerId;
        }else if (!isOn || time === 0){
            clearInterval(timerRef.current);
        }
        return () => clearInterval(timerRef.current);
    }, [isOn, time])

    return (
        <div>
            <div>
                {time ? formatTime(time) :formatTime(startTime) }
                <button
                    onClick={() => {
                        setIsOn(true)
                        setTime(time ? time : startTime)
                        setStartTime(0)
                    }}
                >
                    시작
                </button>
                <button
                    onClick={() => setIsOn(false)}
                >
                    정지
                </button>
                <button
                    onClick={() => {
                        setTime(0);
                        setIsOn(false);
                    }}
                >
                    리셋
                </button>
            </div>
            <input
                type="range"
                value={startTime}
                onChange={(e) =>
                    setStartTime(e.target.value)
                }
                max='3600'
                step='30'
                min='0'
            />
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
