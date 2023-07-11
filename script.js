
// 텍스트 작성 및 삭제 함수 : 즉시 실행
(function(){
    const spanEl = document.querySelector("main h2 span");
    const txtArr = ['SpringFramwork Developer', 'Server-End Developer', 'Java-Based Web Developer', 'Data Analyst', 'Big-Data Developer'];
    let index = 0;
    let currentTxt = txtArr[index].split("");
    function writeTxt(){
    spanEl.textContent  += currentTxt.shift(); 
    if(currentTxt.length !== 0){ 
        setTimeout(writeTxt, Math.floor(Math.random() * 100));
    }else{
        currentTxt = spanEl.textContent.split("");
        setTimeout(deleteTxt, 3000);
    }
    }
    function deleteTxt(){
    currentTxt.pop();
    spanEl.textContent = currentTxt.join("");
    if(currentTxt.length !== 0){
        setTimeout(deleteTxt, Math.floor(Math.random() * 100))
    }else{
        index = (index + 1) % txtArr.length;
        currentTxt = txtArr[index].split("");
        writeTxt();
    }
    }
    writeTxt();
})();

// 상하 scroll 발생시 header 태그에 active 클래스 추가(삭제)
const headerEl = document.querySelector("header");
window.addEventListener("scroll", function(){
    scrollCheck();
});
function scrollCheck(){
    let browserScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if(browserScrollY > 0){
        headerEl.classList.add("active");
    }else{
        headerEl.classList.remove("active");
    }
}

// animation scroll 이동
const animationMove = function(selector){
    // ① 매개변수로 들어온 selector 로 이동할 대상 요소 노드 가져오기
    const targetEl = document.querySelector(selector);
    // ② 현재 브라우저의 스크롤 정보(y 값)
    const browserScrollY = window.pageYOffset;
    // ③ 이동할 대상의 위치(y 값)
    const targetScrollY = targetEl.getBoundingClientRect().top + browserScrollY;
    // ④ 스크롤 이동
    window.scrollTo({top : targetScrollY, behavior: 'smooth'}); 
};
// 스크롤 이벤트 연결하기
const scrollMoveEl = document.querySelectorAll("[data animation scroll='true']");
for(let i = 0; i < scrollMoveEl.length; i++){
    scrollMoveEl[i].addEventListener('click', function(e){
        const target = this.dataset.target;
        animationMove(target);
    });
}

/*
element.getBoundingClientRect().x : 현재 창기준 x좌표
element.getBoundingClientRect().y : 현재 창기준 y좌표
element.getBoundingClientRect().width : 엘리먼트 가로
element.getBoundingClientRect().height : 엘리먼트 세로
element.getBoundingClientRect().top : 현재 창기준 세로 시작점 부터 엘리먼트 윗변 까지의 거리
element.getBoundingClientRect().left : 현재 창기준 가로 시작점 부터 엘리먼트 왼쪽변 까지의 거리
element.getBoundingClientRect().right : 현재 창기준 가로 시작점 부터 엘리먼트 오른쪽변 까지의 거리
element.getBoundingClientRect().bottom : 현재 창기준 세로 시작점 부터 엘리먼트 아래변 까지의 거리
*/
