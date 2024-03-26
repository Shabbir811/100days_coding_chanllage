// Question 55: Double Numbers in an Array: . Then, use a trick to make a new list where each number is twice its original value.
// Make a list of numbers
var listnumber = [2, 5, 7, 8, 4, 50, 22];
function double(list) {
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var i = list_1[_i];
        console.log(i * 2);
    }
}
double(listnumber);
