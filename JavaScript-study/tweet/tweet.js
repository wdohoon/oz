// 트윗 게시 버튼 요소
const postTweet = document.querySelector('#postTweet');

// 트윗이 게시될 컨테이너
const tweetsContainer = document.querySelector('#tweets_container');

// 전체 삭제 버튼 요소 생성 또는 선택
let deleteAllButton = document.querySelector('#deleteAllButton');
if (!deleteAllButton) {
    deleteAllButton = document.createElement('button');
    deleteAllButton.id = 'deleteAllButton';
    deleteAllButton.textContent = '전체 삭제';
    // 원하는 위치에 버튼 추가 (예: 트윗 컨테이너 상단)
    tweetsContainer.parentNode.insertBefore(deleteAllButton, tweetsContainer);
}

// 전체 삭제 버튼 클릭 시 모든 트윗 삭제
deleteAllButton.addEventListener('click', function () {
    tweetsContainer.innerHTML = '';
});

postTweet.addEventListener('click', function () {
    // 트윗을 입력할 input 요소
    const tweetInput = document.querySelector('#tweetInput');

    // 입력된 트윗 내용 가져오기
    const tweetText = tweetInput.value.trim();

    // input이 비어있지 않을 때만 트윗 생성
    if (tweetText !== '') {
        // 트윗 요소 생성
        const tweetDiv = document.createElement('div');
        tweetDiv.classList.add('tweet');

        // 트윗 내용 요소 생성
        const tweetContent = document.createElement('p');
        tweetContent.classList.add('tweet-content');
        tweetContent.textContent = tweetText;

        // 좋아요 버튼 생성
        const likeButton = document.createElement('button');
        likeButton.classList.add('like-button');
        likeButton.textContent = '좋아요';

        // 좋아요 카운트 요소 생성
        const likeCount = document.createElement('span');
        likeCount.classList.add('like-count');
        likeCount.textContent = '0';

        // 삭제 버튼 생성
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = '삭제';

        // 좋아요 버튼 클릭 시 카운트 증가 이벤트 리스너 추가
        likeButton.addEventListener('click', function () {
            let count = parseInt(likeCount.textContent);
            count++;
            likeCount.textContent = count;
        });

        // 삭제 버튼 클릭 시 해당 트윗 삭제
        deleteButton.addEventListener('click', function () {
            tweetsContainer.removeChild(tweetDiv);
        });

        // 트윗 요소에 내용, 좋아요 버튼, 좋아요 카운트, 삭제 버튼 추가
        tweetDiv.appendChild(tweetContent);
        tweetDiv.appendChild(likeButton);
        tweetDiv.appendChild(likeCount);
        tweetDiv.appendChild(deleteButton);

        // 트윗 컨테이너에 트윗 추가
        tweetsContainer.appendChild(tweetDiv);

        // 입력 필드 비우기
        tweetInput.value = '';
    }
});
