// Basic conditionals
const num = 10;
if (num === 10) {
  console.log("num is 10");
} else if (num > 10) {
  console.log("num greater than 10");
} else {
  console.log("this is not a number");
}

// Basic conditionals if if
const name = 10;
if (name === 10) {
  console.log("num is 10");
}
if (name > 10) {
  console.log("num greater than 10");
} else {
  console.log("this is not a number");
}

// Ternary operator
var number = 10;
const isTen =
  number === 10 ? console.log("number is 10") : console.log("number is not 10");

// Truthy and Falsy
// 4 main things that are falsy: undefined, '', 0 and null
var foo = "John";
var boo;
var loo = null;

if (loo) {
  console.log("heyy this does not sound true but its truthy");
} else {
  console.log("Falsy");
}

// switch
var myHobby = "swimming";

switch (myHobby) {
  case "running":
    console.log("i love running");
    break;
  case "swimming":
    console.log("i love swimming");
    break;
  case "running":
    console.log("i love running");
    break;
}
