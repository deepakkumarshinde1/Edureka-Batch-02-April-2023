// operators
// Arithmetic Operators
// + , - , * , / , %
let a = 2;
let b = 3;
let result = a * b - 10; // 2*2*2

// Assignment Operators ==> give a value
let a1;
a1 = 10;
a1 += 50; // a1 = a1 + 50;
a1 += 10; // a1 = a1 + 10;
a1 -= 30; // a1 = a1 - 30;
a1 *= 2; // a1 = a1 * 2
a1 /= 2; // a1 = a1 / 2
a1 %= 3; // a1 = a1 % 3 ( modulus ) ==> reminder of division
console.log(a1);

// Compare Operators

// eq == (data)
// neq != (data)
// gt >
// gte >=
// lt <
// lteq <=
// strong eql === (data + dataType)
// strong neq !== (data + dataType)

// is deepak is available session
//  (true) ==> Yes
//  (false) ==> No

// if .. else (conditional statement)
let a2 = 10; // number
let b2 = "10"; // string
if (a2 === b2) {
  // true code
  console.log("Yes");
} else {
  // false code
  console.log("No");
}

// Logic Operators
let a3 = 11;
let b3 = 10;
let c3 = 11;
// and ==> && ==> left and right ==> true
// or ==> || ==> left or right ==> true
// if (a3 == b3 && b3 == c3) {
//   console.log("yes from logical ");
// } else {
//   console.log("no from logical ");
// }

if (a3 == b3 && b3 == c3) {
  console.log("yes from logical ");
} else {
  console.log("no from logical ");
}

// if(typeof a3 === 'number' && a3 == b3){

// }

// not ==> !
let isPresent = true;
isPresent = !isPresent; // false
isPresent = !isPresent; // true
console.log(isPresent);
// statements
// arrays
// object
// string
// math
// date
