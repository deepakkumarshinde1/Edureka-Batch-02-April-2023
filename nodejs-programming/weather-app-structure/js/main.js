const API = "338d7049189196fba6402362a0f256f2";

async function getWeatherDetails(city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`;
  let response = await fetch(url);
  let data = await response.json();
  // print logic
}
let a;
// '2a' ==> 'NAN' (number);
// let a=null;
let button = document.getElementById("saveBtn");
button.addEventListener("click", (event) => {
  event.preventDefault();
  //let city = input.value;
  //getWeatherDetails(city);
});

// promises are use handel exception / error in async way
// async keyword is use to make a function as promise function
// await keyword is use to run a promise and return promise result
// when we have to run multiple promise one ofter other

// fetch , mongoose lib , axios lib
// whenever you want to run a code in non blocking state

// spread opr ==> create a new copy of array or object
let stud = {
  name: "rohan",
};
let stud_1 = { ...stud };

// rest param opr ==> we want a function have unlimited parameter
function add(...data) {
  // value ==> array
}
add(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(1, 2, 3, 4, 5, 6, 7, 8);

function* addOne() {
  yield 10;
  yield 20;
  yield 30;
  yield 40;
}

let data = addOne();

console.log(data.next().value);
console.log(data.next().value);
console.log(data.next().value);
console.log(data.next().value);
