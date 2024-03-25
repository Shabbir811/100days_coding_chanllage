// Question 47: Advanced Array Destructuring: ,.
// question47
console.log("\nquestion47");
//Given an array of objects representing different laptops, each with properties make, model, and year
let laptops =[{
    make: "HP",
    model: "X1",
    year:  2024,
}, {
    make: "dell",
    model: "y23",
    year:  2022,
}]

// use array destructuring to assign the first and second laptops to variables
let [laptop1 , laptop2] = laptops

// Then, log these variables.
console.log(laptop1);
console.log(laptop2);