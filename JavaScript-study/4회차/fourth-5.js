// 결과를 확인하고 싶으면 터미널에 node test5.js를 입력하세요.

// 다음 for문과 동일한 결과를 출력하는 while문을 작성하세요.
let str = 'ozcoding school';
let num = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] === 'o') {
        num++;
    }
}
console.log(num);

// while문을 작성하세요.
let i = 0; // 초기화 부분을 while 문 바깥으로 이동
while (i < str.length) {
    // for 문의 조건을 while 문의 조건으로 사용
    if (str[i] === 'o') {
        num++;
    }
    i++; // 증가 부분을 while 문 내부의 끝으로 이동
}
console.log(num);
