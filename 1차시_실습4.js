// 기본형과 참조형의 차이

let a = 1;

let b = a;

console.log(b);  // 1

b = 2;

console.log(a);  // 1

console.log(b);  // 2


let src = { x: 1 };

let copy = src;

console.log(copy.x);  // 1

copy.x = 10;


console.log(src.x);  // 10

console.log(copy.x);  // 10

