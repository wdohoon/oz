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

        // 그 외의 버튼들은 아직 처리하지 않습니다.
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
        display.textContent = String(result);
        firstOperand = result;
    }

    waitingForSecondOperand = true;
    operator = nextOperator === '=' ? null : nextOperator;
    console.log(`First Operand: ${firstOperand}, Operator: ${operator}`);
}

// 계산을 수행하는 함수
function calculate(firstOperand, secondOperand, operator) {
    if (operator === '+') {
        return firstOperand + secondOperand;
    } else if (operator === '−') {
        return firstOperand - secondOperand;
    } else if (operator === '×') {
        return firstOperand * secondOperand;
    } else if (operator === '÷') {
        return firstOperand / secondOperand;
    }

    return secondOperand;
}

// 계산기를 초기화하는 함수
function resetCalculator() {
    display.textContent = '0';
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
}
