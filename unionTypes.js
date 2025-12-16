"use strict";
// union types
let age = 25;
age = "twenty-five";
let coordinates = { x: 10, y: 20 };
coordinates = { lat: 40.7128, long: -74.006 };
// Union types with functions
function printAge(age) {
    console.log(`You're ${age} yours old.`);
}
printAge(25);
printAge("twenty-five");
function calculateTax(price, tax) {
    // this way we might multiply string with number which is not valid
    // so to fix this we use type narrowing
    if (typeof price === "string") {
        price.replace("$", "");
        //  parsefloat to convert string to number
        return parseFloat(price) * tax;
    }
    else {
        //  if number => convert none and do the multiplication
        return price * tax;
    }
}
// union types with arrays
// const stuff: any[] = [1, "hello", true, { x: 10 }];
// this is better
// const stuff: (number | string)[] = [1, "hello", 2, "world"];
// if I put a string in the array it will give an error, cuz either all string or all number
const stuff = [1, 2, 3];
const coords = [];
coords.push({ x: 10, y: 20 });
coords.push({ lat: 40.7128, long: -74.006 });
// Literal types (the literal value is the type)
let zero = 0;
// zero = 2; // Error
let mood = "happy";
mood = "sad";
let today = "Monday";
