interface ProductSample {
  price: number;
  name: string;
  quantity: number;
}
const printProduct = (product: ProductSample): void => {
  console.log(`${product.name} - $${product.price}`);
};
