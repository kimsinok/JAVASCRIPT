/*
 * 함수 호이스팅에 대한 예제
 */


hello('Kim');  // Hello, Kim


function hello (name) {
     console.log(`Hello, ${name}`);
}


hi('Kim');  // ReferenceError: Cannot access 'hi' before initialization


const hi = function (name) {
     console.log(`Hi, ${name}`);
}

hi('Kim');

