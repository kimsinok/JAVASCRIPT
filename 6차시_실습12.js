//계산된 프로퍼티 이름으로 프로퍼티 키를 동적으로 생성하는 예제

const prefix = 'prop';

let i = 0;

const obj = {

     [`${prefix}-${++i}`]: i,
     [`${prefix}-${++i}`]: i,
     [`${prefix}-${++i}`]: i
};


console.log(obj); // { 'prop-1': 1, 'prop-2': 2, 'prop-3': 3 }

console.log(obj['prop-1']);   // 1


