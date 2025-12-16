"use strict";
// create a variable called highScore that can be either a number or Boolean
let highScore;
// create an array called stuff that can be number or string
// it can't be a mixture of both in the array
let stuff;
let mixedColors;
// Write a function called greet that accepts a string or an array of strings
// It should return "Hello, <name>" if a string is passed in
// It should return "Hello, <name1>, <name2>, ..." if an array of strings is passed in
function greet(person) {
    // we used type narrowing to check the type of person
    if (typeof person === "string") {
        return `Hello, ${person}`;
    }
    else {
        return `Hello, ${person.join(", ")}`;
    }
}
