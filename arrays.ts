const activeUsers: string[] = [];
activeUsers.push("Alice");
// activeUsers.push(12);
const ageList: number[] = [25, 30, 35];
// change first element
ageList[0] = 26;
// ageList.push("Murad"); wrong only numbers allowed

// Another way to declare arrays
// const bools: Array<boolean> = [true, false, true];
// this one is better
const bools: boolean[] = [true, false, true];
type Point = { x: number; y: number };
const coords: Point[] = [];
coords.push({ x: 2, y: 3 });
// coords.push({ x: "2", y: 3 }); wrong because x should be number not string
// multidimensional arrays
// two dimensional array
const board: string[][] = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "O", "X"],
];
// three dimensional array
const demo: number[][][] = [[[1]]];
