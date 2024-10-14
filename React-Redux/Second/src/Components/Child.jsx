
function Child(info) {
    return (
        <div style={{border: 'solid 1px red', padding: '10px'}}>
            <p>이름</p>
            <div>{info.name}</div>
            <p>나이</p>
            <div>{info.age}</div>
            { info.isMarried ? (<div>기혼</div>) : (<div>미혼</div>) }
        </div>
    )
}

export default Child