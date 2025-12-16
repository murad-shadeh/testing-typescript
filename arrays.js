"use strict";
const activeUsers = [];
activeUsers.push("Alice");
// activeUsers.push(12);
const ageList = [25, 30, 35];
// change first element
ageList[0] = 26;
// ageList.push("Murad"); wrong only numbers allowed
// Another way to declare arrays
// const bools: Array<boolean> = [true, false, true];
// this one is better
const bools = [true, false, true];
const coords = [];
coords.push({ x: 2, y: 3 });
// coords.push({ x: "2", y: 3 }); wrong because x should be number not string
// multidimensional arrays
// two dimensional array
const board = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"],
];
// three dimensional array
const demo = [[[1]]];
