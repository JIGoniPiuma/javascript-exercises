const sumAll = function (posInt1, posInt2) {
  let sum = 0;
  let distance = Math.abs(posInt1 - posInt2);
  let min = Math.min(posInt1, posInt2);

  if (
    !Number.isInteger(posInt1) ||
    posInt1 <= 0 ||
    !Number.isInteger(posInt2) ||
    posInt2 <= 0
  ) {
    return "ERROR";
  } else {
    for (let i = 0; i <= distance; i++) {
      sum += min;
      min++;
    }

    return sum;
  }
};
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(2.5, 4);
// Do not edit below this line
module.exports = sumAll;
