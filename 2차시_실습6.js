
// 함수를 무명의 리터럴로 생성할 수 있다.
// 함수를 변수에 저장할 수 있다.

const increase = function (num) {
     return ++num;
}


const decrease = function (num) {
     return --num;
}

// 함수를 객체에 저장할 수 있다.

const auxs = {
     increase,  // increase: increase
     decrease
};


console.log(auxs.increase(5));  // 6

console.log(auxs.decrease(5));  // 4

