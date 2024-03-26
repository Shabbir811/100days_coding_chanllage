//Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

let list = ["red", 4 , "eight", "car",true, 56]

let nwlist = list.filter(val =>typeof val === "string")

console.log(nwlist)