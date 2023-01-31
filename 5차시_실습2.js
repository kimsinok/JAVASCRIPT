*
 * 클로저에 대한 예제
 */


const x = 1;

// 외부함수
function outer() {
     
     const x = 10;

     // 내부함수
     const inner = function () {
          console.log(x);
     }

     return inner;

}

const innerFunc = outer();

console.log(typeof innerFunc);   // function

innerFunc();  // 10
