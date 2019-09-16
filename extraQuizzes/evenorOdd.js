// Create a function that checks if the number is even or odd using 2 helper
// functions to create it (isEven, isOdd)
// if even, return 'EVEN', else return 'ODD'

function evenOrOdd(number) {
  return isEven(number) == "EVEN" ? isEven(number) : isOdd(number);
}

function isEven(number) {
  if (number % 2 === 0) {
    return "EVEN";
  }
}
function isOdd(number) {
  if (number % 3 === 0) {
    return "ODD";
  }
}

console.log(evenOrOdd(10));

function evenOrOdd2(number) {
  if (number % 2 === 0) {
    return "EVEN";
  } else if (number % 3 === 0) {
    return "ODD";
  } else {
    return "ERROR";
  }
}
