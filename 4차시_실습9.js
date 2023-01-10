var x = "global's x";

var y = "global's y";


function outer() {

     var z = "outer's local z";

     console.log(x);  // global's x
     console.log(y);  // global's y
     console.log(z);  // outer's local z

     function inner() {
          var x = "inner's local x";
          
          console.log(x);  // inner's local x
          console.log(y);  // global's y
          console.log(z);  // outer's local z
     }

     inner();

}


outer();

console.log(x); // global's x
console.log(y); // global's y
