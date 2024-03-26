// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
let grade:number[] = [78,89,45,65,59,34]

// let calculate average 
let average: number= grade.reduce((a,b)=> a+b)/grade.length

console.log(average);

