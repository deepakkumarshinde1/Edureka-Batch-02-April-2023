let a = 10; // global variables
let b = 20; // global variables

function add(varOne, varTwo) {
  let result = varOne + varTwo;
  console.log(result); // local variables
  //function code
} // function definition

// run function
add(a, b); // function call
add(40, 70);
add(90, 100);

// 5 types
// function definition*
// function expression
// inline function / callback function
// IIFE ==> Immediate Invoke function expression
// arrow function
