let button = document.querySelector("#btn");
let myText = document.querySelector("#myText");
let textInput = document.querySelector("#text-input");

// Event is user action
// add event
// keyboard => keypress , keyup
// mouse => click, dblclick , change , mouseover

// add event
button.addEventListener("click", function () {
  myText.innerHTML = "Edureka";
});

button.addEventListener("dblclick", function () {
  myText.innerHTML = "MERN";
});

textInput.addEventListener("keyup", function (event) {
  // collect a data from input ==> .value
  // 13 ==> enter
  if (event.keyCode === 13) {
    let value = textInput.value;
    myText.innerHTML = value;
  }
});
