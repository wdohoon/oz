import { useState } from 'react'
import './App.css'

function App() {

    const [todoList, setTodoList] = useState([
        {id: 0, content: '자스'},
        {id: 1, content: '리액트'}
    ])

  return (
    <>
        <ul>
            <li>

            </li>
        </ul>
    </>
  )
}

export default App
