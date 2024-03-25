
// question46
console.log("\nquestion46");
// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year.
let laptop = {
    make: "HP",
    model: "X1",
    year:  2024,
    describe: function(){ //a method describe() that logs a sentence about the laptop.
       
        console.log(`this is a manufacture in ${this.year} by ${this.make} model is ${this.model}  `)
    }
};
laptop.describe();





