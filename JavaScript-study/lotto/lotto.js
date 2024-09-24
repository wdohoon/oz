/**
 * 로또 번호 생성기: 사용자 인터페이스를 통해 로또 당첨 번호 및 로또 번호를 자동으로 생성하고 표시합니다.
 *
 * 기본 요구사항:
 * 1. 로또 당첨 번호 생성 기능:
 *    - '이번 주 당첨 번호 생성하기' 버튼을 클릭하면 1부터 45까지의 숫자 중 랜덤하게 6개를 선택하여 오름차순으로 표시합니다.
 *    - 중복된 숫자가 없어야 하며, 이전에 생성된 번호는 새 번호 생성 시 화면에서 제거됩니다.
 * 2. 로또 번호 자동 선택 기능:
 *    - '로또 번호 자동 생성' 버튼을 클릭하면 5세트의 로또 번호(각 세트는 6개의 숫자)를 랜덤하게 생성하여 표시합니다.
 *    - 각 번호 세트는 중복 없이 오름차순으로 정렬되어야 하며, 당첨 번호 생성 후에만 사용 가능해야 합니다.
 * 3. 매칭 표시 기능: 자동 생성된 번호 중 당첨 번호와 일치하는 숫자는 특별히 강조하여 표시합니다.
 *
 * 사용 예:
 * - 당첨 번호 생성하기 버튼 클릭 -> 당첨 번호가 화면에 표시됩니다.
 * - 로또 번호 자동 생성 버튼 클릭 -> 5세트의 로또 번호가 화면에 표시됩니다. 당첨 번호와 일치하는 숫자는 강조됩니다.
 */
// '이번 주 당첨 번호 생성하기' 버튼에 대한 참조를 가져옵니다.
const generateWinningNumbers = document.getElementById(
    'generateWinningNumbers'
);
// '로또 번호 자동 생성' 버튼에 대한 참조를 가져옵니다.
const generateLottoNumbers = document.getElementById('generateLottoNumbers');
// 당첨 번호를 보여줄 HTML 요소에 대한 참조를 가져옵니다.
const winningNumContainer = document.getElementById('winningNumbers');
// 자동 생성된 로또 번호를 보여줄 HTML 요소에 대한 참조를 가져옵니다.
const lottoNumContainer = document.getElementById('lottoNumbers');

// 초기 당첨 번호 배열
let winningNumbers = [];

// 로또 번호 자동 생성 버튼을 처음에는 비활성화합니다.
generateLottoNumbers.disabled = true;

/**
 * 1부터 45까지의 숫자 중에서 무작위로 6개의 숫자를 선택하여 배열로 반환하는 함수입니다.
 * 중복된 숫자가 없도록 하며, 반환된 배열은 오름차순으로 정렬됩니다.
 */
function generateNumbers() {
    const numbers = [];
    while (numbers.length < 6) {
        const randomNum = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }
    numbers.sort((a, b) => a - b);
    return numbers;
}

/**
 * 숫자 배열을 받아서 HTML 요소로 변환하여 반환하는 함수입니다.
 * 각 숫자는 <span> 요소로 감싸지며, 당첨 번호와 일치하는 경우 특별한 스타일이 적용됩니다.
 * @param {number[]} numbers - 표시할 숫자의 배열
 * @param {number[]} winningNumbers - 당첨 번호 배열 (선택 사항)
 * @returns {DocumentFragment} - 생성된 HTML 요소들을 담은 문서 프래그먼트
 */
function displayNumbers(numbers, winningNumbers = []) {
    const fragment = document.createDocumentFragment();
    numbers.forEach((number) => {
        const span = document.createElement('span');
        span.textContent = number;
        span.classList.add('number');
        if (winningNumbers.includes(number)) {
            span.classList.add('match');
        }
        fragment.appendChild(span);
    });
    return fragment;
}

generateWinningNumbers.addEventListener('click', () => {
    // generateNumbers 함수를 호출하여 당첨 번호를 생성합니다.
    winningNumbers = generateNumbers();
    // 이전에 표시된 당첨 번호가 있다면, 화면에서 제거합니다.
    winningNumContainer.innerHTML = '';
    // 새로운 당첨 번호를 화면에 표시합니다.
    const winningNumsFragment = displayNumbers(winningNumbers);
    winningNumContainer.appendChild(winningNumsFragment);
    // 로또 번호 자동 생성 버튼을 활성화합니다.
    generateLottoNumbers.disabled = false;
});

generateLottoNumbers.addEventListener('click', () => {
    // 당첨 번호가 먼저 생성되어 있는지 확인합니다.
    if (winningNumbers.length === 0) {
        alert('먼저 당첨 번호를 생성해주세요!');
        return;
    }
    // 이전에 생성된 로또 번호가 있다면, 화면에서 제거합니다.
    lottoNumContainer.innerHTML = '';
    // 5세트의 로또 번호를 생성하고 화면에 표시합니다.
    for (let i = 0; i < 5; i++) {
        const lottoNumbers = generateNumbers();
        const lottoNumsFragment = displayNumbers(lottoNumbers, winningNumbers);
        const lottoSetDiv = document.createElement('div');
        lottoSetDiv.classList.add('lotto-set');
        lottoSetDiv.appendChild(lottoNumsFragment);
        lottoNumContainer.appendChild(lottoSetDiv);
    }
});
