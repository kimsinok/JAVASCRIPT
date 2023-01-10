
// 전역 변수 : 전역 스코프
var x = 1;

function add(a, b) {
     // 지역 변수 : 함수 레벨 스코프
     var y = 2;
     console.log(x, y, a, b); // 1 2 3 4
}

add(3, 4);


console.log(`y : ${y}`);  // ReferenceError: y is not defined


