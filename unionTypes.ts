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
