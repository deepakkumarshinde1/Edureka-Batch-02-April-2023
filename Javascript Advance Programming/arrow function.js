// arrow
let array = [10, 20, 30, 40];

let sqrArray = array.map(function (value) {
  return value * value;
});

//  arrow function
// () =>{}

let sqrArray_1 = array.map((value) => {
  return value * value;
});

let sqrArray_2 = array.map((value) => value * value);
console.log(sqrArray_2);

// can you explain => difference in class

class Circle {
  radius = 10;

  draw() {
    setTimeout(() => {
      console.log(this.radius);
    }, 1000);
  }
}

let circle = new Circle();
circle.draw();

// function with function keyword ==> "this" keyword will always refers to "window object"
// function with "=>"  "this" keyword will always have instance with surrounding environment
// hoisting

// "window" is a global object ==> and all global variable & function are attached to window

var a = 10;

console.log(a);
console.log(window.a);

function fun() {}

fun();
window.fun();

alert();
window.alert();

// gen function
// reg expressions
