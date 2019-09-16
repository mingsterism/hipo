// Function decleration
function isEven(number) {
  const answer = number % 2 === 0;
  return answer;
}

// running an operation on 2 functions by adding their return values
function add10(x) {
  return x + 10;
}
function add20(y) {
  return y + 20;
}

console.log(add10(10) + add20(100));
var answer = isEven(10);
console.log("Number 10 is ", answer);

// Rocket systax : a shorthand way to declare a function
const add30 = z => {
  return z + 30;
};

console.log(add30(100));

// Parameters and Default Arguments
const chanceOfSuccess = (age, income, country = "Hong Kong") => {
  if (age > 20 && income > 1000 && country === "Singapore") {
    return 0.5;
  } else {
    return 0.1;
  }
};

console.log(chanceOfSuccess(22, 10000))
