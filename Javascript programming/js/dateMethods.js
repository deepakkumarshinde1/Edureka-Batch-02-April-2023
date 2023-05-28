// date
let date = new Date();

// today date full
let fullDate = date.toLocaleDateString();
console.log(fullDate);

// current time
let fullTime = date.toLocaleTimeString();
console.log(fullTime);

// day
let array = ["Sunday", "Monday"];
let day = date.getDay();
console.log(day);

// date
let todayDate = date.getDate();
console.log(todayDate);

// fullYear
let fullYear = date.getFullYear();
console.log(fullYear);

// Month
let monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = date.getMonth();
console.log(monthList[month]);
// hr
let hr = date.getHours();
console.log(hr);

// min
let min = date.getMinutes();
console.log(min);

// sec
let sec = date.getSeconds();
console.log(sec);

// setInterval

// 10 days

// setInterval(function () {
//   let date = new Date();
//   // current time
//   let fullTime = date.toLocaleTimeString();
//   console.log(fullTime);
// }, 1000);
