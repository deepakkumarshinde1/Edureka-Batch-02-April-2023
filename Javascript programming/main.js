// arrays
// array you can collect more then data
// list or student, product
// let array = [10, 20, 30, 40, 50];
// how get length array
// every object in js has set props and methods
// props like variable
// methods like function
// key:value
// key in array auto gen
// key with zero
// key / index

let array = [10, 20, 30, 20, 40, 20, 50, 30];
console.log(array);
// add data ==> push() , unshift() (add data from starting)
// array.push(20);
// array.push(30);
// array.push(50);

// remove data ==> splice() , pop() , shift() (remove data from starting)
//array.splice(2, 1); // indexNumber , Del Count

// array to string ==> join()
//let arrayString = array.join(" :: ");
//console.log(arrayString);

// read array ==> forEach()
// single data ==> array[indexNumber]
// console.log(array[3]);
// all data

// array.forEach(function (value,index){

// });

// array.forEach( function(){
//     // when we write a function on other function call ==> callback function
// } )
// in forEach we don't use return keyword
let search = 30;
// search in array => find(), filter()

// single record => find(), single value else "undefined"
let searchResult = array.find(function (value, index) {
  return value === search;
});
// [10,20,30,40,50]
console.log(searchResult);
// multi record => filter , [values] else []

let searchList = array.filter(function (value, index) {
  return value === search;
});
console.log(searchList);
// create new array from old array ==> map()
// square of each value in an array

let squareList = array.map(function (value, index) {
  let square = value * value;
  return square;
});

array.forEach(function (value, index) {
  let square = value * value;
  console.log(square);
});

console.log(squareList);

// home study
// sort* ==> sort()
// reduce* ==> reduce()
// includes*
// slice*

// object
// string
// math
// date

// function
// group of code /block of code to perform logic operations
// reusable in nature
// () param body
fundamentals;
// keyboard ==> mumbai (p1) ==> surat (p2)

// let record = find() value , filter() [] , join() string, map() [], sort() [], reduce() value, slice() [], includes() boolean
// push(), unshift() , pop(), splice() , shift()

function work() {
  // work
  return 50000;
}

let alex = work();
