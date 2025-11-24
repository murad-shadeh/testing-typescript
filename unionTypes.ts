// union types
let age: number | string = 25;
age = "twenty-five";

type Point = {
  x: number;
  y: number;
};
type Loc = {
  lat: number;
  long: number;
};
let coordinates: Point | Loc = { x: 10, y: 20 };
coordinates = { lat: 40.7128, long: -74.006 };
// Union types with functions
function printAge(age: number | string): void {
  console.log(`You're ${age} yours old.`);
}
printAge(25);
printAge("twenty-five");

function calculateTax(price: number | string, tax: number): number {
  // this way we might multiply string with number which is not valid
  // so to fix this we use type narrowing
  if (typeof price === "string") {
    price.replace("$", "");
    //  parsefloat to convert string to number
    return parseFloat(price) * tax;
  } else {
    //  if number => convert none and do the multiplication
    return price * tax;
  }
}
