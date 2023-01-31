
//객체 리터럴을 이욯한 객체 생성

const counter = {
     
     num: 0,

     increase: function () {
          return this.num++;
     }

}


counter.increase();

console.log(counter.num);
