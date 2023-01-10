
// 블록 레벨 스코프에 대한 예제

let i = 10;

function foo () {
     // 블록 레벨 스코프
     let i = 100;

     for (let i = 0; i < 3; i++) { //  블록 레벨 스코프
          console.log(i);  // 0 1 2
     }

     console.log(i);   // 100

}

foo();

console.log(i);   // 10
