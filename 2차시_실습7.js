
const increase = function (num) {
     return ++num;
}


const decrease = function (num) {
     return --num;
}


const auxs = {
     increase,  // increase: increase
     decrease
};



// 함수를 함수의 매개변수로 전달할 수 있고 
// 함수를 함수의 반환값으로 사용할 수 있다.
function makeCounter(func) {

     let num = 0;

     return function() {
          num = func(num);
          return num;
     };

}


const inc = makeCounter(auxs.increase);

console.log(inc());  // 1
console.log(inc());  // 2
console.log(inc());  // 3
console.log(inc());  // 4

