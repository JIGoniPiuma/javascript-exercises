const convertToFahrenheit = function (tempCelsius) {
  console.log(parseFloat(((tempCelsius * 9) / 5 + 32).toFixed(1)));
  return parseFloat(((tempCelsius * 9) / 5 + 32).toFixed(1));
};

const convertToCelsius = function (tempFarenheit) {
  console.log(parseFloat((((tempFarenheit - 32) * 5) / 9).toFixed(1)));
  return parseFloat((((tempFarenheit - 32) * 5) / 9).toFixed(1));
};

// Do not edit below this line

convertToCelsius(32);
convertToCelsius(100);
convertToCelsius(-100);
convertToFahrenheit(0);
convertToFahrenheit(73.2);
convertToFahrenheit(-10);
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
