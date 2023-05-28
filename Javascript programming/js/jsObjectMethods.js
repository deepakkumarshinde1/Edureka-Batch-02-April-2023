// object
let restaurant = ["KFG", 200, 500, 4.5];
// collection of key value pair
// key are user defined
// key/property
let jsObject = {
  name: "KFC",
  review: 200,
  minCostForTwo: 500,
  rating: 4.5,
};

// add a data
jsObject["location"] = "Nashik";
console.log(jsObject);

// read data
console.log(jsObject.minCostForTwo);
console.log(jsObject["name"]);

// delete
delete jsObject.rating;
console.log(jsObject);

// all keys in an array
let keys = Object.keys(jsObject);
console.log(keys);

// all value in an array
let values = Object.values(jsObject);
console.log(values);

// convert object to array
let array = Object.entries(jsObject);
console.log(array);
