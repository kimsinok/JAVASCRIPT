
/*
 * 메소드 중복
 */


// 생성자 함수

function Circle(radius) {
     this.radius = radius;

     this.getArea = function() {
          return Math.PI * this.radius ** 2;
     }
}



// 인스턴스 생성
const circle1 = new Circle(1);

const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea); // false

