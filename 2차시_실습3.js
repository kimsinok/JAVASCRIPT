// 숫자를 카운트하기 위한 Counter 싱글톤 객체

const Counter = (function() {

     let num = 0;

     // 객체를 반환한다.
     return {
          
          getCurrentValue() {
               return num;
          } ,


          increaseValue() {
               num++;
          } ,

          decreaseValue() {
               num--;
          }
     }

})();




Counter.increaseValue();
Counter.increaseValue();
console.log(Counter.getCurrentValue());  // 2

Counter.decreaseValue();
console.log(Counter.getCurrentValue());  // 1

