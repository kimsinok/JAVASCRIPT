//객체 리터럴에 의해 생성된 객체의 프로토타입


const obj = { x: 1 };


console.log(obj.__proto__ === Object.prototype); //true

console.log(Object.getPrototypeOf(obj) === Object.prototype); //true

console.log(obj.constructor === Object);  //true



