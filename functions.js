// // function square(num: number) {
// //   return num * num;
// // }
// // square(3);
// // square(true); this is wrong
// // function greet(person: string) {
// //   return `Hello, ${person}!`;
// // }
// // greet("Murad");
// // trying arrow function
// const doSomething = (person: string, age: number, isFunny: boolean) => {
//   return `Hello, ${person}. You are ${age} years old, and are you Funny? ${isFunny}`;
// };
// doSomething("Murad", 25, true);
// // working with default parameters
// // we gave a default value to person parameter ... no need to pass any value for the function or we can if we need something else
// function greet(person: string = "stranger"): string {
//   return `Hello, ${person}!`;
// }
// greet();
// // function return type
// function square(num: number): number {
//   return num * num;
// }
// square(3);
// // function that could return more than one type (union type)
// function random(num: number) {
//   if (Math.random() < 0.5) {
//     return num.toString();
//   }
//   return num;
// }
// // Anonymous function contextual typing
// const colors = ["red", "green", "blue"];
// colors.map((color: string): string => {
//   return color.toUpperCase();
// });
// // console.log(colors);
// // A function that doesn't return anything (void)
// const logMessage = (message: string): void => {
//   console.log(message);
// };
// logMessage("Hello, World!");
// // The never type of return
// const throwError = (message: string): never => {
//   throw new Error(message);
// };
// // throwError("This is an error!");
// // or it never stops executing
// const infiniteLoop = (): never => {
//   while (true) {
//     console.log("Looping forever...");
//   }
// };
// lecture 26
// Excercise 1
var twofer = function (name) {
    if (name === void 0) { name = "you"; }
    return "One for ".concat(name, ", one for me.");
};
console.log(twofer("Murad"));
console.log(twofer());
// Excercise 2
var isLeapYear = function (year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    return false;
};
console.log(isLeapYear(2012)); // true
console.log(isLeapYear(2013)); // false
