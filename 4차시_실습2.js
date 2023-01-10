

// 전역 변수
var x = 1;

if (true) {
     // 전역 변수
     // var 키워드로 선언한 변수는 중복 선언이 가능하다.
     var x = 2;
}

console.log(x);  // 2

