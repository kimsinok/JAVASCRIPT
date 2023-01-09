
const add = function (x, y) {
     return x + y;
}

const sub = function (x, y) {
     return x - y;
}


const mul = function (x, y) {
     return x * y;
}

const calcurate = function (a, b, func) {
     console.log(func(a, b));
}


calcurate(1, 2, add);  // 3

calcurate(1, 2, sub);  // -1

calcurate(1, 2, mul);  // 2

