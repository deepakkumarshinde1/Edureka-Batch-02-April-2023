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

// promises
// async await
// fetch
// class
// arrow function
// ternary operators
// **generator (REDUX-SAGA)
// **regular expression
