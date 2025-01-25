const add = function (...args) {
  let sum = 0;
  args.forEach((element) => {
    sum += element;
  });
  console.log(sum);
  return sum;
};
//add();

const subtract = function (...args) {
  if (args.length === 0) {
    console.log("Array vacio");
    return 0;
  } else {
    let substraction = args.reduce(
      (accumulator, currentValue) => accumulator - currentValue
    );
    console.log(substraction);
    return substraction;
  }
};
//subtract();

const sum = function (...args) {
  let sumTotal = 0;
  if (args.length === 0) {
    return sumTotal;
  } else {
    args.forEach((element) => {
      if (Array.isArray(element) && element.length === 0) {
        return;
      } else if (Array.isArray(element)) {
        sumTotal += element.reduce(
          (accumulator, currentValue) => accumulator + currentValue
        );
      } else {
        sumTotal += element;
      }
    });
    return sumTotal;
  }
};

sum([1, 2], 1, 2);

const multiply = function (...args) {
  let multTotal = 1;

  if (args.length === 0) {
    multTotal = 0;
    return multTotal;
  } else {
    args.forEach((element) => {
      if (Array.isArray(element)) {
        multTotal = element.reduce(
          (accumulator, currentValue) => accumulator * currentValue
        );
      } else {
        multTotal *= element;
      }
    });
    return multTotal;
  }
};

multiply([1, 2, 3], 1, 2, 3);
const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
factorial(3);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
