
let foo = 1;

{

     console.log(foo); // ReferenceError: Cannot access 'foo' before initialization

     let foo = 2; // 블록 레벨 스코프틑 갖는 지역 변수

}
