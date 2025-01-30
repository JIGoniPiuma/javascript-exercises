const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

console.log(books);
const getTheTitles = function (arr) {
  console.log(arr.map((item) => item.title));
  return arr.map((item) => item.title);
};
getTheTitles(books);
// Do not edit below this line
module.exports = getTheTitles;
