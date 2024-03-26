// Function with Rest Parameters:. It should log each hobby with a statement saying you enjoy that hobby.
// Write a function that takes a rest parameter representing multiple hobbies
function hobbies() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var add = [rest];
    rest.forEach(function (r) {
        console.log("i enjoy ".concat(r, " .\n        "));
    });
}
hobbies("play cricket", "watching tv", "reading book", "coding");
