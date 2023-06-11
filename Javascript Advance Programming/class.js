// promise with fetch api
// async await
// fetch

// how call a data from server
// let url = "https://fakestoreapi.com/products";
// server api GET, POST , PUT ,DELETE

// resolve ==> all is well (.then())
// reject ==> exception (catch())

// older work with multi promise
// function getData(url) {
//   fetch(url, { method: "GET" })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

// new run multiple promise ==> async await

// async ==> convert a function to promise function
// await ==> run promise and on success it returns a result
// await can only in async function
let url = "https://fakestoreapi.com/products";
async function getData(url) {
  try {
    let response = await fetch(url, { method: "GET" });
    console.log(response);
    let data = await response.json(); // {} , [{},{}]
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

getData(url);

// class ==> oop
// JAVA , py, php ,c#
// arrow function

// **generator (REDUX-SAGA)
// **regular expression

// use class  or avoid class

// in-build
// Date()
// Object()
// Array()
// String()
// Number()
// Boolean()

// class ==> property (variables) and method (functions)

// human ==> hands , leg , head , nose , mouth
// human ==> running , clapping , jumping , speaking, watching
class Human {
  // props
  hands = 2;
  legs = 2;
  head = 1;

  // methods
  running() {
    console.log("running with 2 legs");
  }
}
// run logic of class we need to create a object
let deepak = new Human();
let suraj = new Human();
deepak.running();
suraj.running();

class Car {
  // props
  wheels = 4;
  // method
  running() {
    console.log("running with 4 wheels");
  }
}

let swift = new Car();
let tiago = new Car();
swift.running();
tiago.running();

// car ==> wheels (4)
// car ==> running

// let date = new Date();
//  new ==> create a object of a class
// Date() ==> class contractor assign all methods & props to object

let date1 = new Date(1990, 24, 05); // old date
let date2 = new Date(); // current date
