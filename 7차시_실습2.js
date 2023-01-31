/*
 * 프로토타입 기반의 상속을 통한 메소드 공유
 */



// 생성자 함수

function Circle(radius) {
     this.radius = radius;   
}


Circle.prototype.getArea = function () {
     return Math.PI * this.radius ** 2;
}





// 인스턴스 생성
const circle1 = new Circle(1);

const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea); // true


