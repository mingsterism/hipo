/**
 * Chapter: Console logs
 */

var age = 10;
console.log("THIS IS MING GGGGGGGGG")
console.log(1234);
console.log("heyy");
console.log("heyy", 1234);
console.log("hey my age is", age);
// String interpolation
console.log(`hey my age is ${age}`);

/**
 * Chapter: Comments
 * martin fowler - comments are used to explain poorly designed code
 */
/**
 * @param {integer} n
 * @returns {boolean} true or false
 * @description To check if the number is even or odd
 */
function isOdd(n) {
  return n % 3 === 0;
}

/**
 * Data Types
 * 1) undefined - a variable that is not yet assigned
 * 2) null - an asssigned value
 * 3) number
 * 4) string
 * 5) symbol
 * 6) object - has methods (actions) and properties (key value)
 * 7) boolean - true or false
 */

function meow() {
  console.log("MEOW");
}
class Cat {
  constructor() {}
  meow() {
    console.log("MEOW");
  }
}

var cat = {
  name: "Fluffles",
  meow: meow()
};

/**
 *  Arithemtic Operators
 *
 * */

function arimthic(x) {
  return (x * x) / x + x - (x % x);
}
console.log(arimthic(10));

/**
 * String Concatenation
 *
 *
 */
var str1 = "hey my name";
var str2 = "lukas";

var num1 = "10";
var num2 = 10;
console.log(str1 + " " + str2);
console.log(num1 + num2);

function addNums(x, y) {
  return x + y;
}
console.log(addNums(10, "10"));

/**
 * Properties - key value pair of an object
 *  */
var value3 = "blablabla";
var studentProfile1234 = {
  key: "value",
  key2: "value2",
  key3: value3,
  obj1: {
    obj2: {
      obj3: {
        obj4: "something super hidden"
      }
    }
  },
  name: "elijah",
  hobbies: ["eating", "sleeping"]
};
console.log(Object.keys(studentProfile1234));
console.log(Object.values(studentProfile1234));
console.log(studentProfile1234.name);
console.log(studentProfile1234.obj1.obj2.obj3.obj4);

/**
 * Methods - actions that can be performed on objects
 *  */

var leonard = {
  age: 29,
  hasBirthday: function() {
    this.age = this.age + 1;
  }
};

console.log(leonard.age);
leonard.hasBirthday();
console.log(leonard.age);

// Built in Objects

var generateProfile = (name, age) => {
  return {
    name: name,
    age: age,
    hasBirthday: function() {
      this.age = this.age + 1;
    }
  };
};

class Human {
  constructor(x, y) {
    this.name = x;
    this.age = y;
  }
  hasBirthday() {
    this.age = this.age + 1;
  }
}

var elijah = new Human("elijah", 10);
elijah.hasBirthday();

generateProfile("leonard", 20);
const abe = generateProfile("abe lim", 18);
console.log(abe);
abe.hasBirthday();
console.log(abe.age);
Math.random();

// You want to build a student debt system for ptpn
/**
 * figure out what is the function names, class names
 * business domain knowledge + technical knowledge
 * Steps in architecting a system
 *  - find student profiles that owe money
 *  - identify how much they owe
 *  - how long they have owing
 *  - have they already graduated
 */
