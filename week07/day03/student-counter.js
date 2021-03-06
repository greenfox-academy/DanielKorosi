'use strict';

var students = [
        {'name': 'Teodor', 'age': 3, 'candies': 2},
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Zsombor', 'age': 12, 'candies': 5},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Olaf', 'age': 12, 'candies': 7},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
]

// create a function that takes a list of students and logs:
// - how many candies are owned by students

function candyTotal(list) {
  var numOfCandies = 0;
  list.forEach(function(i){
    numOfCandies += i.candies;
  });
  return numOfCandies;
}
console.log(candyTotal(students));

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function ageSum(l) {
  var totalAge = 0;
  l.forEach(function(i){
    if (i.candies < 5) {
      totalAge += i.age;
    }
  })
  return totalAge
}
console.log(ageSum(students));
