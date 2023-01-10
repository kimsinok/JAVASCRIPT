

// 변수 호이스팅

function hello(name) {

     console.log(msg);  // undefined

     var msg = 'Hello, ';

     console.log(msg + name);  // Hello, kim

     /*
          var msg = undefined;

          console.log(msg);  // undefined

          msg = 'Hello, ';

          console.log(msg + name);  // Hello, kim

     */

}


hello('kim');

