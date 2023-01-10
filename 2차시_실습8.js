/*
 * arguments 프로퍼티에 대한 예제
 */


// 함수 선언문
function add (x, y) {
     console.log(arguments);

     for (const v of arguments) {
          console.log(v);
     }    
}


// 함수 호출
add(10, 20);


