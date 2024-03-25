// question48
console.log("\nquestion48");
//
// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

let laptop1Price: number[]=[20000,30000,45000]
let  laptop2Price: number[]=[25000,37000,40000]

let combineprice = [...laptop1Price, ...laptop2Price].sort()

console.log(combineprice);
