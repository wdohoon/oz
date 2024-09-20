/* -----------------------------------------------------------------------------*/
// <요구사항>
// 1. 실시간으로 시간이 업데이트되는 시계를 생성해야 합니다.
// 2. 1초마다 현재 시각으로 업데이트될 수 있도록 해야 합니다. (setInterval)
// 3. 형식은 ' 🕖현재 시각은 00시 00분 00초 입니다.' 로 작성해주세요.
// 4. stop 버튼을 클릭하면, 시계가 정지해야 합니다. (clearInterval)
// 5. 정각이 되기까지 몇 분이 남았는지 표시하도록 해야 합니다.
// 6. 형식은 '정각까지 00분 남았습니다!'로 작성해주세요.
// 7. 스타일은 마음껏 수정해도 좋습니다.
/* -----------------------------------------------------------------------------*/

let timer;
function startClock() {
    // 기존에 타이머가 실행 중이면 중지
    if (timer) {
        clearInterval(timer);
    }

    timer = setInterval(function () {
        // 현재 시각을 표시할 p요소
        const p = document.querySelector('#now_time');
        // 정각 되기까지 남은 분을 나타내는 div 요소
        const div = document.querySelector('#sharp');

        // 1. 현재 날짜와 시간을 가져옵니다.
        const nowTime = new Date();

        // 2. 시, 분, 초를 각각 변수에 할당합니다.
        let hour = nowTime.getHours();
        let minute = nowTime.getMinutes();
        let second = nowTime.getSeconds();

        // 3. 정각까지 남은 분을 계산합니다.
        let sharpTime = 59 - minute;
        if (second > 0) {
            sharpTime = sharpTime + 1;
        }

        // 4. 시계와 남은 시간을 표시하는 요소에 텍스트를 설정합니다.
        p.textContent = `🕖현재 시각은 ${hour}시 ${minute}분 ${second}초 입니다.`;
        div.textContent = `정각까지 ${sharpTime}분 남았습니다!`;
    }, 1000); // 1초마다 함수가 실행되도록 설정
}
startClock();
// 5. 'stop' 버튼을 클릭했을 때 시계를 정지합니다.
const button = document.getElementById('stop');
button.addEventListener('click', function () {
    clearInterval(timer);
});

const startButton = document.getElementById('start');
startButton.addEventListener('click', function () {
    startClock();
});
