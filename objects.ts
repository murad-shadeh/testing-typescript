// This function takes an object with 'first' and 'last' string properties and prints the full name.
function printName(name: { first: string; last: string }): void {
  console.log(`${name.first} ${name.last}`);
}
printName({ first: "Murad", last: "Pro" });

// decalirng a avariable as an object in a specific pattern
// let coordinate: { x: number; y: number } = { x: 34, y: 2 };

// what the function return is an object with x and y number properties
// function randomCoordinate(): { x: number; y: number } {
//   return { x: Math.random(), y: Math.random() };
// }

printName({ first: "Mick", last: "Jagger", age: "24" }); // typeScript doesn't allow this because of excess property checking
// but if we put this in a variable => TypeScript will allow it becuase it checks only the required properties and ignores the rest
const singer = { first: "Mick", last: "Jagger", age: 24 };
printName(singer);

// Type aliases.
type Point = { x: number; y: number };
// I can use this instead of writing the whole object pattern again and again
let coordinate: Point = { x: 34, y: 2 };
function randomCoordinate(): Point {
  return { x: Math.random(), y: Math.random() };
}
// Now it accepts a point as an parameter and returns a point
function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}
