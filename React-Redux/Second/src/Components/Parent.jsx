import Child from "./Child.jsx";

const Parent = () => {
    return (
        <div style={{ border: "solid 1px blue" }}>
            부모 컴포넌트
            <Child />
        </div>
    )
}

export default Parent;