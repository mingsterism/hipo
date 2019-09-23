// creating an array
/**
 * Creating a list of strings, values, numbers, boolean
 *
 */

var names = ["james", "ming", "ashley", "abc"];
// Index of an array
// why does it start with 0
for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// Accessing elements - using the index to get the objects
console.log(names[2]);

// update elements
names[1] = "Elijah";
console.log(names);

// check difference between var and let
let height = 20;
const name = "ash";

const hobbies = ["swim", "run", "jumpping", "dash"];
hobbies[2] = "jogging";
console.log(hobbies);

// performance of appending and pushing to arrays

// arrays and function

var elijah = {
  name: "Elijah",
  gender: "M"
};

function myname() {
  console.log("I am running inside");
}

var listOfHumans = [
  {
    name: myname,
    gender: "M"
  },
  {
    name: "Jason",
    gender: "M"
  },
  {
    name: "Jovan",
    gender: "M"
  },
  {
    name: "Zhi Ming",
    gender: "M"
  }
];

listOfHumans[0].name();
