function factorial(x) {
  if (x === 1) {
    return 1;
  }
  return x * factorial(x - 1);
}

function factorial1(x) {
  console.time("factorial test");
  let result = 1;
  for (let i = 1; i <= x; i++) {
    result = result * i;
  }
  console.timeEnd("factorial test");
  return result;
}

// console.log(factorial(10000));
console.log(factorial1(10000));
