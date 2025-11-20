// 1 create an empty array of numbers called ages
const ages: number[] = [];
// 2 create a two dimenial array called gameBoard that starts as an emty array
const gameBoard: string[][] = [];
// 3 create Product type that contains name and price
type Product = { name: string; price: number };
// 4 Write a function called getTotal that accpets and array of Product type and retuen the sum of all products prices
function getTotal(products: Product[]): number {
  let sum = 0;
  for (const product of products) {
    sum += product.price;
  }
  return sum;
}
