var pt = { x: 10, y: 20 };
var thomas = {
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom",
    id: 12345,
    sayHi: function () {
        return "Hello!";
    },
};
thomas.first = "Tom";
var shoes = {
    name: "Adidas",
    price: 100,
    applyDiscount: function (amount) {
        return this.price - this.price * amount;
    },
};
console.log(shoes.applyDiscount(0.3));
