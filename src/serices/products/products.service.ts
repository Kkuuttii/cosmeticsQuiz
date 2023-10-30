import products from "./mock/products.json";

export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  oldPrice: number | null;
}

export async function getProducts() {
  return await new Promise<Product[]>((resolve) => {
    setTimeout(() => resolve(products), 1000);
  });
}
