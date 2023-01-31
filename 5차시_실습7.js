

const Person = (function () {

     let _age = 0;

     function Person(name, age) {
          this.name = name;   // public
          _age = age;         // private
     }

     Person.prototype.sayHi = function () {
          console.log(`name : ${this.name}, age : ${_age}`);
     };

     return Person;  //생성자 함수 반환

})();


console.log(typeof Person);  // function


const p1 = new Person('Hong gil-dong', 20);

p1.sayHi();   // name : Hong gil-dong, age : 20

p1.name = 'Kim';
p1._age = 10;   // 반영이 안됨

p1.sayHi(); // name : Kim, age : 20
