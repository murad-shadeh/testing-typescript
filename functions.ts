// function square(num: number) {
//   return num * num;
// }
// square(3);
// square(true); this is wrong
// function greet(person: string) {
//   return `Hello, ${person}!`;
// }
// greet("Murad");

// trying arrow function
const doSomething = (person: string, age: number, isFunny: boolean) => {
  return `Hello, ${person}. You are ${age} years old, and are you Funny? ${isFunny}`;
};
doSomething("Murad", 25, true);

// working with default parameters
// we gave a default value to person parameter ... no need to pass any value for the function or we can if we need something else
function greet(person: string = "stranger"): string {
  return `Hello, ${person}!`;
}
greet();
// function return type
function square(num: number): number {
  return num * num;
}
square(3);

// function that could return more than one type (union type)
function random(num: number) {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}

// Anonymous function contextual typing
const colors = ["red", "green", "blue"];
colors.map((color: string): string => {
  return color.toUpperCase();
});

// console.log(colors);
