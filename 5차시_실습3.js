
/*
 * 젼역 변수의 문제점
 */


let count = 0;

const increase = function() {
     return ++count;
}

console.log(increase());
console.log(increase());


count = 10;

console.log(increase());
console.log(increase());
