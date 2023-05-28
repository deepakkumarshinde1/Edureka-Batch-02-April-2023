// console.log(document);
// collect html element
// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByTagName();
// document.querySelector();
// document.querySelectorAll();

// run a code in time interval ==> setInterval
let count = 10;
let id = setInterval(function () {
  // interval code
  if (count === 1) {
    clearInterval(id);
  }

  console.log(count);
  count--;
}, 1000); // 1s === 1000ms

// after 10 sec you run a code
setTimeout(function () {
  console.log("time out");
}, 1000 * 5);
