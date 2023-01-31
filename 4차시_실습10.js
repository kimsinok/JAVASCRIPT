
var x = 1;


// 전역 함수
// foo 함수의 상위 스코프는 전역 스코프(전역 렉시컬 환경)이다.
function foo() {
     var x = 2;

     bar();
}



// 전역 함수
// bar 함수의 상위 스코프는 전역 스코프(전역 렉시컬 환경)이다.
function foo() {

     console.log(x);  // 1
}

foo();



