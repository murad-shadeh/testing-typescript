"use strict";
// 1 create an empty array of numbers called ages
const ages = [];
// 2 create a two dimenial array called gameBoard that starts as an emty array
const gameBoard = [];
// 4 Write a function called getTotal that accpets and array of Product type and retuen the sum of all products prices
function getTotal(products) {
    let sum = 0;
    for (const product of products) {
        sum += product.price;
    }
    return sum;
}
