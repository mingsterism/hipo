// function factorial(x) {
//     var result = 0
//   for (var num = 1; num < x; num++) {
//       num = num * num
//   }
// }

// factorial(100); // 120 100 * 99 * 98 * ... * 1
// factorial(5); // 120

var number = 5;
var result = 1;
for (var x = 1; x <= number; x = x + 1) {
  console.log(x);
  result = result * x;
}
console.log("yaaa im out")
