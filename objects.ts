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

// printName({ first: "Mick", last: "Jagger", age: "24" }); // typeScript doesn't allow this because of excess property checking
// // but if we put this in a variable => TypeScript will allow it becuase it checks only the required properties and ignores the rest
// const singer = { first: "Mick", last: "Jagger", age: 24 };
// printName(singer);

// // Type aliases.
// type Point = { x: number; y: number };
// // I can use this instead of writing the whole object pattern again and again
// let coordinate: Point = { x: 34, y: 2 };
// function randomCoordinate(): Point {
//   return { x: Math.random(), y: Math.random() };
// }
// // Now it accepts a point as an parameter and returns a point
// function doublePoint(point: Point): Point {
//   return { x: point.x * 2, y: point.y * 2 };
// }

// Nested objects
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};
// passing this object
const mySong: Song = {
  title: "Unchained Melody",
  artist: "The Righteous Brothers",
  numStreams: 123456789,
  credits: { producer: "Phil Spector", writer: "Alex North" },
};
function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}
function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}
const earnings = calculatePayout(mySong);
console.log(earnings);
const prinitng = printSong(mySong);
console.log(prinitng);
// Optional properties
type Point = { x: number; y: number; z?: number };
const myPoint: Point = { x: 1, y: 2 }; // if we put z or not ts won't complain

// readonly modifier in TypeScript
type User = {
  readonly id: number;
  username: string;
};

const user: User = { id: 12345, username: "muradpro" };
console.log(user.id);
//but if we try to change the id it will give an error
user.id = 33; // Error: Cannot assign to 'id' because it is a read-only property
