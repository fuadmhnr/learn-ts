import { Category, Product } from "../src/type-alias";

describe('Type alias', function(): void {
  it('should support in typescript', function(): void {
    const category: Category = {
      id: '1',
      name: 'Handphone'
    }

    const product: Product = {
      id: 1,
      name: 'Samsung S22',
      price: 13500000,
      category: category
    }

    console.info(category);
    console.info(product);
  });
})