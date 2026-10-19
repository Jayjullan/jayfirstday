import { Component, inject } from '@angular/core';
import { Button } from '../button/button';
import { ProductService, Product } from '../services/product';

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [Button],
  templateUrl: './second-page.html',
  styleUrl: './second-page.css',
})
export class SecondPage {
  private productService = inject(ProductService);

  products: Product[] = this.productService.getProducts();
}
