"use strict";
const pt = { x: 10, y: 20 };
const thomas = {
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom",
    id: 12345,
    sayHi: () => {
        return "Hello!";
    },
};
thomas.first = "Tom";
const shoes = {
    name: "Adidas",
    price: 100,
    applyDiscount(amount) {
        return this.price - this.price * amount;
    },
};
console.log(shoes.applyDiscount(0.3));
const elton = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark: () => {
        return "Woof woof!";
    },
};
const chewy = {
    name: "Chewy",
    age: 4.5,
    breed: "labrador",
    bark: () => {
        return "bark!";
    },
    job: "guide dog",
};
const pierre = {
    name: "Pierre",
    id: Math.floor(Math.random() * 1000),
    email: "hello@gmail.com",
    level: "senior",
    languages: ["JS", "Python"],
};
