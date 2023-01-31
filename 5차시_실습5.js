/*
 * 카운트 상태를 유지하기 위해서 클로저를 활용한 예제
 */


// 즉시 실행 함수
const increase = (function () {
     let num = 0;

     return function () {
          return ++num;
     }

})();



console.log(typeof increase);  // function

console.log(increase());  // 1
console.log(increase());  // 2
console.log(increase());  // 3

