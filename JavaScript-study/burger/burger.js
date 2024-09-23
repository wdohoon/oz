/*
기본 요구사항
-
1. ‘햄버거 주문서’ 를 클릭하면 `classList.toggle()` 메서드를 통해 ‘추가’, ‘제거’ 버튼이 토글 됩니다.
2. 햄버거 아이템 리스트 배열을 생성해줍니다.
3. 추가 버튼을 클릭하면 배열 리스트 1개가 추가 됩니다.
4. 이때 배열 리스트의 값은 추가 버튼 누를 때 마다 숫자가 1개씩 증가 됩니다.
5. 제거 버튼을 클릭하면 배열 리스트의 값 중 마지막 값 1개가 제거됩니다.
6. styles.css 파일을 보고 새롭게 생성한 요소에 class를 추가하면 미리 작성해둔 스타일이 적용됩니다.
7. 스타일은 마음껏 수정해도 좋습니다.
*/
// 아이템 리스트 배열
let items = [];

// 아이템 추가 버튼 클릭 시 호출되는 함수
function addItem() {
    // 햄버거 아이템 추가
    let newItem = `🍔 ${items.length + 1}`;
    // 새로운 햄버거 아이템을 배열에 추가
    items.push(newItem);
    // 아이템 렌더링
    renderItems();
}

// 아이템 제거 버튼 클릭 시 호출되는 함수
function removeItem() {
    // 배열의 마지막 햄버거 아이템 제거
    if (items.length > 0) {
        items.pop();
        // 아이템 렌더링
        renderItems();
    }
}

// 아이템 리스트 렌더링 함수
function renderItems() {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = ''; // 리스트 초기화

    // 배열의 각 아이템을 순회하며 리스트에 추가
    items.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        itemList.appendChild(li);
    });
}

// '햄버거 주문서' 클릭 시 classList.toggle() 메서드 실행
const title = document.getElementById('title');
const addButton = document.getElementById('addButton');
const removeButton = document.getElementById('removeButton');

title.addEventListener('click', function () {
    addButton.classList.toggle('show');
    removeButton.classList.toggle('show');
});

// 아이템 추가 및 제거 버튼에 클릭 이벤트 핸들러 등록
addButton.addEventListener('click', addItem);
removeButton.addEventListener('click', removeItem);

