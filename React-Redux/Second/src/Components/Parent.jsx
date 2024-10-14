import Child from "./Child.jsx";
import {useState} from "react";

const Parent = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [isMarried, setIsMarried] = useState(false);

    const [form, setForm] = useState(
        [
            {
                name: '',
                age: 0,
                isMarried: false
            }
        ]
    )
    const handleAdd = () => {
        setForm(
            [
                ...form,
                {
                    name: name,
                    age: age,
                    isMarried: isMarried
                }
            ]
        )
    }

    return (
        <div style={{border: "solid 1px blue", padding: '10px'}}>
            <p>이름</p>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>나이</p>
            <input
                type="number"
                value={age}
                onChange={(e) => (setAge(e.target.value))}
            />
            <p>결혼 유무</p>
            <input
                type="checkbox"
                checked={isMarried}
                onChange={(e) => setIsMarried(e.target.checked)}
            />
            <button onClick={handleAdd}>추가</button>
            {
                form.map((item) => (
                    <Child name={item.name} age={item.age} isMarried={item.isMarried}/>

                ))
            }
        </div>
    )
}

export default Parent;