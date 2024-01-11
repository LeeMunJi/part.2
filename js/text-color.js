// heading 변수를 선언하고 h1태그를 저장한 꼴이 되었다.
var heading = document.querySelector("#heading");
// h1태그를 클릭하면 글자색을 red로 설정하라는 의미이다.
heading.onclick = function() {
    heading.style.color = "red";
}