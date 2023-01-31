/*
 * 렉시컬 스코프에 대한 예제
 */


var x = 1;


// 전역 함수
// foo 함수의 상위 스코프는 전역 실행 컨텍스트의 렉시컬 환경이다.
function foo () {
     var x = 2;
     bar(); 
}

// 전역 함수
// bar 함수의 상위 스코프는 전역 실행 컨텍스트의 렉시컬 환경이다.
function bar () {
     console.log(x);
}


foo();  // 1
