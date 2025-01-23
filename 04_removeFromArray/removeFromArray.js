const removeFromArray = function (arr) {
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arguments.length; j++) {
      if (arr[i] === arguments[j]) {
        arr.splice(i, 1);
        i--;

        console.log(arr);
      }
    }
  }

  return arr;
};

removeFromArray([1, 2, 2, 3, "hola", "hola", 4], 2, 3, "hola");
// SOLUCION ODIN
// const removeFromArray = function (array, ...args) {

//     const newArray = [];

//     array.forEach((item) => {

//       if (!args.includes(item)) {
//         newArray.push(item);
//       }
//     });

//     return newArray;
//   };
// Do not edit below this line
module.exports = removeFromArray;
