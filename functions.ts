function square(num: number) {
  return num * num;
}
square(3);
// square(true); this is wrong
function greet(person: string) {
  return `Hello, ${person}!`;
}
greet("Murad");

// trying arrow function
const doSomething = (person: string, age: number, isFunny: boolean) => {
  return `Hello, ${person}. You are ${age} years old, and are you Funny? ${isFunny}`;
};
doSomething("Murad", 25, true);
