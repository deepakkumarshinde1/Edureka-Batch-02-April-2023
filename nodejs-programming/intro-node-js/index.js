let a = 10;
let b = 20;

let result = a + b;
console.log(result);

function fun() {
  console.log("i am fun function");
}

fun();

// console.log(window); error
// console.log(document); error
setTimeout(() => {
  console.log("i am set timeout function");
}, 5000);
