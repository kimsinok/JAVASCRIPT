
//계산된 프로퍼티 이름으로 프로퍼티 키를 동적으로 생성하는 예제

const lastName = 'last-name';

const person = {

     'first-name': 'gil-dong',
     [lastName]: 'Hong'

};


console.log(person['last-name']);

console.log(person[lastName]);
