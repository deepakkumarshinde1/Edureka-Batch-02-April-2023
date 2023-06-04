// ES5
// ES6

// Array destructuring
let array = [10, 20];
// let numberOne = array[0];
// let numberTwo = array[1];

let [numberOne, numberTwo] = array;
// console.log(numberOne, numberTwo);

// Object destructuring
let restaurant = {
  name: "KFC",
  minCostForTwo: 500,
  locality: "Katraj",
  city: "Pune",
};

// let name = restaurant.name;
// let locality = restaurant.locality;
let { name: rName, locality: loc, city } = restaurant;

// console.log(rName);
// console.log(loc);
// console.log(city);

//***************** spread operators ...
// create a new copy of array/object
// marge two or more array/object

// array
let arrayOne = [10, 20, 30];
let arrayThree = [10, 20, 30];
// let arrayTwo = arrayOne.concat();
let arrayTwo = [...arrayOne, ...arrayThree];

arrayOne[0] = 22;
arrayOne.push(1000);

console.log(arrayOne);
console.log(arrayTwo);

// object
let rest = {
  name: "KCF",
  price: "500",
};

let cityDetails = {
  city: "Pune",
  locality: "Pune Station",
};

// let restDetails = Object.assign({}, rest, cityDetails);
let restDetails = { ...rest, ...cityDetails };

console.log(restDetails);

// ternary operators
// let number = 10;
// let result = null;

// if (number % 2 === 0) {
//   result = "even";
// } else {
//   result = "odd";
// }

let number = 10;
let result = number % 2 === 0 ? "Even" : "odd";
console.log(result);

let user = true;
let userRole = user === true ? "Admin" : "Student";
console.log(userRole);

// promises ==> situation (like a try catch block)

// div ==> number 0 at the bottom , it will a exception

// 5 min 2 min
// javascript ==> 1 thread
// single thread programming language
// default js is sync in nature

async function div(varOne, varTwo) {
  setTimeout(function () {
    for (let index = 0; index < 500; index++) {
      console.log("edureka");
    }
  });

  if (varTwo == 0) {
    return Promise.reject("Cannot divide by zero");
  } else {
    let result = varOne / varTwo;
    return Promise.resolve(result);
  }
}
console.log("awesome before");

div(10, 20)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

// promise ==> rejected or response

// sync is removed by using a way called as event loop ==> asynchronous
// event loop as many functionality ==> and they are called web api
// DOM ,setTimeout , setInterval , promises , async await , fetch

// run the run promise

// div(10, 0);

console.log("awesome after");
// async await
// fetch

// class
// arrow function

// **generator (REDUX-SAGA)
// **regular expression
// button.addEventListener("click", function () {});
