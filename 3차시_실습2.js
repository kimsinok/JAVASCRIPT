
// 전역 변수
let x = 1;

if (true) {
     // let 키워드로 선언한 변수는 if 코드 블록을 지역 스코프로 갖는 블록 레벨 스코프를 갖는다.
     let x = 10;
     console.log(x);   // 10
}

console.log(x);   // 1
