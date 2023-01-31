
// 생성자 함수를 이용한 객체 생성
function Person(name, age) {
     this.name = name;  // public
     let _age = age;    // private
}


Person.prototype.sayHi = function () {
     console.log(`name : ${this.name}, age : ${_age}`);
}


const p1 = new Person('Hong', 10);

p1.sayHi();  // ReferenceError: _age is not defined
