function isEven(number) {
  console.info("is even is running with argument of ", number);
  return number % 2 === 0;
}

function addTheNumbers(input1, input2, input3) {
  return input1 + input2 + input3;
}

/**
 * This function adds both numbers, only if both the numbers are even
 * @param {integer} num1
 * @param {integer} num2
 */
function addIfEven(num1, num2) {}
var answer = isEven(10);
var answer1 = isEven(10);
var answer2 = isEven(10);
var answer3 = isEven(10);
var answer = isEven(10);
const fullAnswer = isEven(10) + isEven(20);
console.log("answer is: ", fullAnswer);

var result = addTheNumbers(10, 10, 10);
console.log("result:", result);
function loanApplication() {}

function creditScore() {}

function giveLoan(x, y) {
  var score1 = loanApplication(x);
  var score2 = creditScore(y);
  if (score1 > 5 && score2 > 6) {
    if (score1 + score2 > 15) {
      return "very good";
    } else {
      return "good";
    }
  } else if (score1 < 5) {
    return "medium";
  } else {
    return "very bad";
  }
}

function countdown(number) {
  for (var x = number; x > 0; x = x - 1) {
    console.log(x);
  }
}

countdown(4);

function meow(x) {
  console.log(x);
  if (x === 1) {
    return "DONE";
  } else {
    return meow(x - 1);
  }
}
/**
 * if number is even, jump by 5 98 go to 94
 * if number is odd, jump by 1 >> 62 go to 61
 * else jump by 3 , which is 67 go to 64
 * TERMINATING CONDITION: if number == 1, 'DONE'
 */

//  function checkifEven(x)

//  function jumpingRecursion(x) {
//      if (terminating condition) {
//         'done'
//      } elif (checkIfEven(x)) {
//         jumpingRecursion(x - 5)
//     } elif() {
//         jumpingRecursion(x - 5)

//     } elif () {
//         jumpingRecursion

//     } else {
//         jumpingRecursion()
//     }
//  }

// var finalResult = meow(100);
// console.log(finalResult);

//Ray
function printEven(x) {
  console.log(x);
  if (x < 0) {
    return "DONE";
  } else {
    if (x % 2 === 0) {
      printEven(x - 5);
    } else if (x % 2 !== 0) {
      printEven(x - 1);
    } else {
      printEven(x - 3);
    }
  }
}
printEven(100);
