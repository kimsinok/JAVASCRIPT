// 객체 리터럴을 이용한 객체 생성

const circle = {

     radius: 5 ,

     // 원의 지름을 구하다.
     // 메소드
     getDiameter: function () {
          return 2 * this.radius; // this는 circle 객체를 가리키다.
     }

};


console.log(circle.getDiameter());   // 10





