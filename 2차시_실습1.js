
// 함수 선언문
function add (x, y) {
     return x + y;
}

// 함수 호출
console.log(add(5, 10));  // 15


// 함수 표현식을 이용한 함수 선언
const sum = function(x, y) {  // 
     return x + y;
}

// 함수 호출
console.log(sum(1, 5));  // 6

// 화살표 함수
const total = (x, y) => x + y;


// 함수 호출
console.log(total(1, 5));  // 6

