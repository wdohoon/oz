import React, { useEffect } from 'react';

function TenTimes() {
    useEffect(() => {
        for (let i = 0; i < 10; i++) {
            console.log(`Effect 실행 횟수: ${i + 1}`);
        }
    }, []);

    return (
        <div>
            <h1>useEffect 마운트 시 10번 실행</h1>
        </div>
    );
}

export default TenTimes;
