// They really look so similar to type aliases, don't they?
interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 10, y: 20 };
// readonly and optional interface properties and interface methods
interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string; // optional property
  //sayhi to be a method and returns a string
  sayHi: () => string;
}
const thomas: Person = {
  first: "Thomas",
  last: "Hardy",
  nickname: "Tom",
  id: 12345,
  sayHi: () => {
    return "Hello!";
  },
};
thomas.first = "Tom";
// thomas.id = 54321; // Error: cannot reassign a readonly property

// interface method parameters
interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number; // method with parameter
}
const shoes: Product = {
  name: "Adidas",
  price: 100,
  applyDiscount(amount: number) {
    return this.price - this.price * amount;
  },
};
console.log(shoes.applyDiscount(0.3));
