// console.log(document);
// collect html element
// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByTagName();

// document.querySelector(); // single element
// document.querySelectorAll();// multi element[]

// in css
// id ==> #idName
// class ==> .className
// element ==> elementName

// how to work elements
let element = document.querySelector("#my-text");
// collect text from element ==> innerHTML
console.log(element.innerText);
// how handel events
// how handel input data

let textList = document.querySelectorAll(".text");
textList.forEach(function (element) {
  console.log(element.innerHTML);
});

let p = document.querySelector("#section-3 p:nth-child(2)");

let p1 = document.querySelectorAll(".section-1")[2].children[1];

console.log(p);
