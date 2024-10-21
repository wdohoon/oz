import React, {useEffect, useState} from 'react';

function Timer() {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const time = setInterval(() => {
            setTimer( timer => timer + 1);
            console.log('timer 실행중')
        }, 1000)
        return() => {
            clearInterval(time);
        }
    }, []);

    return (
        <div>
            Timer: {timer}
        </div>
    );
}

export default Timer;