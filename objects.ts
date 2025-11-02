// This function takes an object with 'first' and 'last' string properties and prints the full name.
function printName(name: { first: string; last: string }): void {
  console.log(`${name.first} ${name.last}`);
}
printName({ first: "Murad", last: "Pro" });
