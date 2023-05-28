// string
// let text2 = new String("edureka");
// console.log(text2);

let text = "India is my country.png.pdf";
console.log(text);

// capital letters
let output1 = text.toUpperCase();
console.log(output1);

// small letter
let output2 = text.toLowerCase();
console.log(output2);

// convert string to array
let output3 = text.split("i");
console.log(output3);

// extension of file
let position = text.lastIndexOf(".");
console.log(position);

// sub string (part of string)
let ext = text.substring(position + 1);
console.log(ext);

// replace data of string
let newString = text.replace("my", "our");
console.log(newString);

// starting and ending space of string
let text1 = "     this is MERN stack course     ";
console.log(text1.trim());
