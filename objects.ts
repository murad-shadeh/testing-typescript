// This function takes an object with 'first' and 'last' string properties and prints the full name.
function printName(name: { first: string; last: string }): void {
  console.log(`${name.first} ${name.last}`);
}
printName({ first: "Murad", last: "Pro" });

// decalirng a avariable as an object in a specific pattern
let coordinate: { x: number; y: number } = { x: 34, y: 2 };

// what the function return is an object with x and y number properties
function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}
