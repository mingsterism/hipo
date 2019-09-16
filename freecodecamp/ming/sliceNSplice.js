var dummyArray = [[1, 2, 3], [4, 5], 1];
var boxA = dummyArray[0];
var boxB = dummyArray[1];
console.log(boxB.splice(1, 0, boxA));
console.log(boxB.flat(1));

function frankenSplice(arr1, arr2, n) {
  //   const arr2Copy = [...arr2];
  const arr2Copy = arr2.slice(0, arr2.length);
  arr2Copy.splice(n, 0, arr1); // sideefffect
  return arr2Copy.flat(1);
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
