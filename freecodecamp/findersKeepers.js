function findElement(arr, func) {
  for (var x in arr) {
    if (func(arr[x])) {
      return arr[x];
    }
  }
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
