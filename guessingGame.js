var answer = 46;

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

function sayAGuess() {
  readline.question("Enter a guess: ", guess => {
    if (parseInt(guess) === answer) {
      console.log("Yaaa its correct");
      readline.close();
    } else {
      if (guess > answer) {
        console.log("your answer is too high");
        sayAGuess();
      } else {
        console.log("Your answer is too low");
        sayAGuess();
      }
      sayAGuess();
    }
  });
}

sayAGuess();

// readline.question( "Enter a guess: ", (guess) {
//     while ()

// })

// 5 === 5
// "dog" === "dog"
// "five" === "five"
// 5 === "48" 48
// parseInt("48") === 48
// var fourtyEightA = parseInt("48"); // 48
// var fourtyEightB = "48"; // 48
// console.log(fourtyEightA === 48);
// console.log(fourtyEightB === 48);

if (abc) {
  console.log("YAA TRUE");
} else {
  console.log("NOOO FALSE");
}
