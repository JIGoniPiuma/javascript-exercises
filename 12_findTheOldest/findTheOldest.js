const people = [
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },

  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const currentYear = new Date().getFullYear();

const findTheOldest = function (people) {
  people.reduce((oldest, person) => {
    let ageOldest = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
    console.log(ageOldest);
    let agePerson = (person.yearOfDeath || currentYear) - person.yearOfBirth;
    console.log(agePerson);
    console.log(ageOldest > agePerson ? oldest : person);
    return ageOldest > agePerson ? oldest : person;
  });
};
findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
