
// 외부 함수
function outer() {

     let x = 1;

     // 내부(중첩) 함수
     function inner() {
          // 내부 함수에서는 외부 함수에 선언된 지역 변수를 참조할 수 있다.
          let y = 2;

          console.log(x, y);  // 1  2
     }

     inner();
}

console.log(outer());


/*
1 2
undefined
*/


