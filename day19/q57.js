// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
var grade = [78, 89, 45, 65, 59, 34];
// let calculate average 
var average = grade.reduce(function (a, b) { return a + b; }) / grade.length;
console.log(average);
