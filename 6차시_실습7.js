/*
 * 프로퍼티 동적 생성
 */

const person = {

     name: 'Lee'

};

// person 객체에 age 프로퍼티가 존재하지 않는다.
// 따라서 person 객체에 age 프로퍼티가 동적으로 생성되고 값이 할당된다.
person.age = 20;

// person['age'] = 20;

console.log(person.age);
