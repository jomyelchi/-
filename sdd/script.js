// 버튼을 클릭할 때 발생할 이벤트를 정의합니다.
document.getElementById("dontClickButton").addEventListener("click", function() {
    // 메시지 변경
    document.getElementById("message").textContent = "누르지 말라고!!!!!! 죽고 싶어?????";
    
    // 배경색을 빨간색으로 변경
    document.body.style.backgroundColor = "#FF0000";

    // 2초 후에 이미지 나타내기
    setTimeout(function() {
        // 메시지 업데이트
        document.getElementById("message").textContent = "망치 살인마 등장 나, 강림.";

         // 이미지의 src 속성에 링크 추가 (웹 이미지 링크 사용)
         document.getElementById("hiddenImage").src = "https://github.com/jomyelchi/userid.github.io/blob/main/1.jpg?raw=true";

        // 이미지 표시 (display: none -> block)
        document.getElementById("hiddenImage").style.display = "block";
    }, 1000); // 2초 후 실행
});
