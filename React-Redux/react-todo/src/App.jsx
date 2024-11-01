import {useEffect, useRef, useState} from 'react'
import './App.css'

function App() {
    const [isLoading, data] = useFetch("http://localhost:3000/todo")
    const [todo, setTodo] = useState([])
    const [currentTodo, setCurrentTodo] = useState(null)
    const [time, setTime] = useState(0)
    const [isTimer, setIsTimer] = useState(false)

    useEffect(() => {
        if (currentTodo){
            fetch(`http://localhost:3000/todo/${currentTodo}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ time: todo.find((el) => el.id === currentTodo).time + 1}) ,
            }).then(res => res.json())
                .then(res => setTodo(prev => prev.map(
                    el => el.id === currentTodo ? res : el))
                )
        }
    }, [time])

    useEffect(() => {
        setTime(0)
    }, [isTimer])

    useEffect(() => {
        if(data) setTodo(data);
    }, [data])

    return (
        <div className="app-container">
            <h1 className="app-title">Todo List</h1>
            <Clock />
            <Advice/>
            <button
                className="toggle-button"
                onClick={() => setIsTimer(prev => !prev)}
            >
                {isTimer ? '스톱워치로 변경' : '타이머로 변경'}
            </button>
            { isTimer ? (
                <Timer time={time} setTime={setTime} />
            ) : (
                <StopWatch time={time} setTime={setTime} />
            )}
            <TodoInput setTodo={setTodo}/>
            <TodoList
                todo={todo}
                setTodo={setTodo}
                setCurrentTodo={setCurrentTodo}
                currentTodo={currentTodo}
            />
        </div>
    )
}

const TodoInput = ({setTodo}) => {
    const inputRef = useRef(null)
    const addTodo = () => {
        const newTodo = {
            content: inputRef.current.value,
            time : 0,
        }
        fetch("http://localhost:3000/todo", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTodo),
        })
            .then(res => res.json())
            .then(res => setTodo((prev) => [...prev, res]))
    }

    return (
        <div className="todo-input-container">
            <input
                type="text"
                ref={inputRef}
                className="todo-input"
                placeholder="새로운 할 일을 입력하세요"
            />
            <button className="add-button" onClick={addTodo}>추가</button>
        </div>
    )
}

const TodoList = ({todo, setTodo, setCurrentTodo, currentTodo}) => {
    return (
        <ul className="todo-list">
            {todo.map((el) => (
                <Todo
                    key={el.id}
                    todo={el}
                    setTodo={setTodo}
                    setCurrentTodo={setCurrentTodo}
                    currentTodo={currentTodo}
                />
            ))}
        </ul>
    )
}

const Todo = ({todo, setTodo, setCurrentTodo, currentTodo}) => {
    return (
        <li className={`todo-item ${currentTodo === todo.id ? "current" : ""}`}>
            <div className="todo-content">
                {todo.content}
                <br/>
                <span className="todo-time">{formatTime(todo.time)}</span>
            </div>
            <div className="todo-buttons">
                <button
                    className="start-button"
                    onClick={() => setCurrentTodo(todo.id)}
                >
                    시작하기
                </button>
                <button
                    className="delete-button"
                    onClick={() => {
                        fetch(`http://localhost:3000/todo/${todo.id}`,{
                            method: "DELETE",
                        }).then((res) => {
                            if (res.ok) {
                                setTodo(prev => prev.filter(el => el.id !== todo.id))
                            }
                        })
                    }}
                >
                    삭제
                </button>
            </div>
        </li>
    )
}

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setData(res)
                setIsLoading(false);
            });
    }, [url])
    return [isLoading, data];
}

const Advice = () => {
    const [isLoading, data] = useFetch("https://korean-advice-open-api.vercel.app/api/advice");

    return (
        <div className="advice-container">
            {!isLoading && (
                <>
                    <div className="advice-message">{data.message}</div>
                    <div className="advice-author">-{data.author}-</div>
                </>
            )}
        </div>
    )
}

const Clock = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(timerId);
    }, [])

    return (
        <div className="clock">
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

const StopWatch = ({ time, setTime }) => {
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
        return () => clearInterval(timerRef.current);
    }, [isOn])

    return (
        <div className="stopwatch-container">
            <div className="time-display">{formatTime(time)}</div>
            <button
                className="toggle-button"
                onClick={() => setIsOn((prev) => !prev)}
            >
                {isOn ? "끄기" : "켜기"}
            </button>
            <button
                className="reset-button"
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

const Timer = ({ time, setTime}) => {
    const [startTime, setStartTime] = useState(0);
    const [isOn, setIsOn] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        if (isOn && time > 0) {
            const timerId = setInterval(() => {
                setTime((prev) => prev - 1)
            }, 1000);
            timerRef.current = timerId;
        } else if (!isOn || time === 0) {
            clearInterval(timerRef.current);
        }
        return () => clearInterval(timerRef.current);
    }, [isOn, time])

    return (
        <div className="timer-container">
            <div className="time-display">
                {time ? formatTime(time) : formatTime(startTime)}
                <button
                    className="start-button"
                    onClick={() => {
                        setIsOn(true)
                        setTime(time ? time : startTime)
                        setStartTime(0)
                    }}
                >
                    시작
                </button>
                <button
                    className="stop-button"
                    onClick={() => setIsOn(false)}
                >
                    정지
                </button>
                <button
                    className="reset-button"
                    onClick={() => {
                        setTime(0);
                        setIsOn(false);
                    }}
                >
                    리셋
                </button>
            </div>

            <input
                className="timer-range"
                type="range"
                value={startTime}
                onChange={(e) =>
                    setStartTime(Number(e.target.value))
                }
                max='3600'
                step='30'
                min='0'
            />
        </div>
    )
}

export default App;
