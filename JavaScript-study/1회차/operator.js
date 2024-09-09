// 결과를 확인하고 싶으면 터미널에 node test.js를 입력하세요.

// 아래 console.log를 이용해 23을 5로 나눈 나머지를 구하는 코드를 입력해주세요
console.log(23 % 5);

// 42의 type을 출력하도록 console.log안에 코드를 입력해주세요
// 출력에 사용되는 변수명은 number입니다.
let number = 42;
console.log(typeof number);

// boolean type을 출력하도록 console.log안에 코드를 입력해주세요
// 출력에 사용되는 변수명은 boolean입니다.
let boolean = true;
console.log(typeof boolean);

// Hello, World 라는 문자의 type을 출력하도록 console.log안에 코드를 입력해주세요
// 출력에 사용되는 변수명은 string입니다.
let string = "Hello, World";
console.log(typeof string);

// 직육면체의 부피를 구하는 식을 console.log안에 작성해주세요
// 가로 : x ,  세로 : y, 높이 : h
// 가로 : 10cm, 세로 : 5cm, 높이 : 7cm
let x = 10;
let y = 5;
let h = 7;
console.log(x * y * h);

// 최대한 할당연산자를 활용해 문제를 풀어주세요

// console.log()안에 코드를 작성해주세요
// 출력에 사용되는 변수명은 updatedWeight입니다.
// 무게 : weight(75kg)
// 출력 요청 값 : 무게 + 5kg
let weight = 75;
let updatedWeight = weight += 5;
console.log(updatedWeight);

// console.log()안에 코드를 작성해주세요
// 출력에 사용되는 변수명은 remainderPizza입니다.
// 피자 : pizza(9조각)
// 출력 요청 값 : pizza를 4명이서 나누었을때 남는 조각의 수
let pizza = 9;
let remainderPizza = pizza % 4;
console.log(remainderPizza);

// console.log()안에 코드를 작성해주세요
// 출력에 사용되는 변수명은 areaOfCircle입니다.
// 반지름 : radius(3cm)
// 출력 요청 값 : radius * radius * 3.14
let radius = 3;
let areaOfCircle = radius * radius * 3.14;
console.log(areaOfCircle);

// console.log()안에 코드를 작성해주세요
// 출력에 사용되는 변수명은 bmi입니다.
// 체질량 지수 : bmi
// 키 : 178cm, 몸무게 : 75kg
// 출력 요청 값 : 몸무게 / (키 * 키)
let height = 178 / 100; // cm를 m로 변환
let bmi = 75 / (height * height);
console.log(bmi);
