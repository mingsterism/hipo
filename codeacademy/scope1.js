// GLOBAL SCOPE / File scope
var ram = 100;

function computer1() {
  var ram = 200;
  console.log("computer 1 ram:", ram);
  // function scope
}

function computer2() {
  var ram = 1000;
  function abc() {
    console.log("ABC RAM: ", ram);
  }
  abc()
  console.log("computer 2 ram", ram);
  // function scope
}
function computer3() {
  var ram = 5000;
  console.log("computer 3 ram", ram, "finish");
  // function scope
}

console.log("global ram: ", ram);
computer1();
computer3();
computer2();

console.log("global ram ----: ", ram);
