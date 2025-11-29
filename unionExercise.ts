// create a variable called highScore that can be either a number or Boolean
let highScore: number | boolean;
// create an array called stuff that can be number or string
// it can't be a mixture of both in the array
let stuff: number[] | string[];
// create a literal type called SkillLevel that has 4 values: "Beginner", "Intermediate", "Advanced", and "Expert"
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";
// create a type called SkiSchoolStudent as the following:
// name must be a string
// age must be a number
// sport must be "ski" or "snowboard"
// level must be value from SkillLevel type (from above)
type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snowboard";
  level: SkillLevel;
};
// Define a type that represents an RGB color
// r should be a number
// g should be a number
// b should be a number
type RGB = {
  r: number;
  g: number;
  b: number;
};
// Define a type that represents an HSL color
// h should be a number
// s should be a number
// l should be a number

// create an array that can hold a mixture of RGB and HSL color types
type HSL = {
  h: number;
  s: number;
  l: number;
};
let mixedColors: (RGB | HSL)[];
// Write a function called greet that accepts a string or an array of strings
// It should return "Hello, <name>" if a string is passed in
// It should return "Hello, <name1>, <name2>, ..." if an array of strings is passed in
function greet(person: string | string[]): string {
  // we used type narrowing to check the type of person
  if (typeof person === "string") {
    return `Hello, ${person}`;
  } else {
    return `Hello, ${person.join(", ")}`;
  }
}
