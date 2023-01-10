
// 전역 변수
var x = 1;

const y = 2;

// 전역 함수
function foo (a) {

     //ㅣ지역 변수
     var x = 3;
     const y = 4;

     // 중첩함수
     function bar (b) {
          //지역 변수
          const z = 5;
          console.log(a + b + x + y + z);  // 42
     }

     bar(10);
}


// 함수 호출
foo(20);
