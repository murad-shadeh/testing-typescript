// They really look so similar to type aliases, don't they?
interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 10, y: 20 };
// readonly and optional interface properties
interface Person {
  readonly id: number;
  first: string;
  last: string;
  age?: number; // optional property
}
const thomas: Person = { first: "Thomas", last: "Hardy", id: 12345 };
thomas.first = "Tom";
// thomas.id = 54321; // Error: cannot reassign a readonly property
