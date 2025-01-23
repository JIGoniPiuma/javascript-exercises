const reverseString = function (string) {
  let stringArray = string.toString().split("");
  let reverseArray = [];

  let j = 0;
  for (let i = stringArray.length - 1; i >= 0; i--) {
    reverseArray[j] = stringArray[i];
    j++;
  }
  let reverseString = reverseArray.join("");

  return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
