

console.log(x);  // ReferenceError: Cannot access 'x' before initialization

let x;

console.log(x);

x = 1;

console.log(x);


/*
     let x;          // 선언 단계 : uninitialized

     x = undefined;  // 초기화 단계

     x = 1;          // 할당 단계

*/


