import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 2500,
      category: 'Electronics',
    },
    {
      id: 2,
      name: 'Headphones',
      price: 150,
      category: 'Accessories',
    },
    {
      id: 3,
      name: 'Keyboard',
      price: 120,
      category: 'Accessories',
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
