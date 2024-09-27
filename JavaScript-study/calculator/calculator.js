// 모든 버튼 요소와 디스플레이 요소를 선택합니다.
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.input');

// 피연산자와 연산자를 저장할 변수를 선언합니다.
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

// 초기 디스플레이 값을 설정합니다.
display.textContent = '0';

// 각 버튼에 클릭 이벤트 리스너를 추가합니다.
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        // 숫자 버튼을 클릭한 경우
        if (button.classList.contains('number')) {
            inputDigit(buttonText);
        }

        // 연산자 버튼을 클릭한 경우
        else if (button.classList.contains('operator')) {
            handleOperator(buttonText);
        }

        // 소수점 버튼을 클릭한 경우
        else if (buttonText === '.') {
            inputDecimal(buttonText);
        }

        // 'C' 버튼을 클릭한 경우
        else if (buttonText === 'C') {
            resetCalculator();
        }

        // 그 외의 버튼들 처리 (±, %)
        else if (buttonText === '±') {
            toggleSign();
        } else if (buttonText === '%') {
            inputPercent();
        }
    });
});

// 숫자를 입력하는 함수
function inputDigit(digit) {
    if (waitingForSecondOperand) {
        display.textContent = digit;
        waitingForSecondOperand = false;
    } else {
        if (display.textContent === '0') {
            display.textContent = digit;
        } else {
            display.textContent += digit;
        }
    }
    updateFontSize();
}

// 소수점을 입력하는 함수
function inputDecimal(dot) {
    if (waitingForSecondOperand) {
        display.textContent = '0.';
        waitingForSecondOperand = false;
        return;
    }
    if (!display.textContent.includes(dot)) {
        display.textContent += dot;
    }
    updateFontSize();
}

// 연산자를 처리하는 함수
function handleOperator(nextOperator) {
    const inputValue = parseFloat(display.textContent);

    if (operator && waitingForSecondOperand) {
        operator = nextOperator === '=' ? null : nextOperator;
        console.log(`Operator changed to ${operator}`);
        return;
    }

    if (firstOperand === null) {
        firstOperand = inputValue;
    } else if (operator) {
        const result = calculate(firstOperand, inputValue, operator);
        display.textContent = formatResult(result);
        firstOperand = result;
    }

    waitingForSecondOperand = true;
    operator = nextOperator === '=' ? null : nextOperator;
    console.log(`First Operand: ${firstOperand}, Operator: ${operator}`);
    updateFontSize();
}

// 계산을 수행하는 함수
function calculate(firstOperand, secondOperand, operator) {
    let result;
    if (operator === '+') {
        result = firstOperand + secondOperand;
    } else if (operator === '−') {
        result = firstOperand - secondOperand;
    } else if (operator === '×') {
        result = firstOperand * secondOperand;
    } else if (operator === '÷') {
        if (secondOperand === 0) {
            alert('0으로 나눌 수 없습니다.');
            return 0;
        }
        result = firstOperand / secondOperand;
    } else {
        return secondOperand;
    }

    // 부동소수점 오류를 최소화하기 위해 결과를 반올림합니다.
    result = parseFloat(result.toFixed(10));

    return result;
}

// 결과를 포맷팅하는 함수
function formatResult(result) {
    if (result.toString().length > 12) {
        // 지수 표기법으로 변환
        return result.toExponential(5);
    } else {
        return result.toString();
    }
}

// 계산기를 초기화하는 함수
function resetCalculator() {
    display.textContent = '0';
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    updateFontSize();
}

// 부호를 변경하는 함수
function toggleSign() {
    const currentValue = parseFloat(display.textContent);
    if (currentValue === 0) return;
    display.textContent = (-currentValue).toString();
    updateFontSize();
}

// 퍼센트를 계산하는 함수
function inputPercent() {
    const currentValue = parseFloat(display.textContent);
    const newValue = currentValue / 100;
    display.textContent = newValue.toString();
    updateFontSize();
}

// 디스플레이 글자 크기를 조정하는 함수
function updateFontSize() {
    const length = display.textContent.length;
    if (length > 10) {
        display.style.fontSize = '30px';
    } else if (length > 7) {
        display.style.fontSize = '40px';
    } else {
        display.style.fontSize = '48px';
    }
}
