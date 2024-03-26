//Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
var list = ["red", 4, "eight", "car", true, 56];
var nwlist = list.filter(function (val) { return typeof val === "string"; });
console.log(nwlist);
