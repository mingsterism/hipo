function mutation(arr) {
  var firstString = arr[0].toLowerCase();
  var secondString = arr[1].toLowerCase();
  var letterIsInWord = true;
  for (var x1 in secondString) {
    if (letterIsInWord) {
      for (var x2 in firstString) {
        if (secondString[x1] === firstString[x2]) {
          letterIsInWord = true;
          break;
        } else {
          letterIsInWord = false;
          continue;
        }
      }
    } else {
      break;
    }
  }
  return letterIsInWord;
}

console.log(mutation(["marry", "rry"]));
