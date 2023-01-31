/*
 * 객체 리터럴을 이용한 객체 생성
 */

const person = {

     name: 'Kim' ,

     sayHello: function () {
          console.log(`Hello, ${this.name}`);
     }

};


console.log(typeof person);  // object

person.sayHello();   // Hello, Kim
