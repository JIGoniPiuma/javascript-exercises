const reverseString = function (string) {
  return string.split("").reverse().join("");
};
console.log(reverseString("Laputaquemepario"));

module.exports = reverseString;
