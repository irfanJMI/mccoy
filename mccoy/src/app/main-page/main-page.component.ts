import { Component } from '@angular/core';
import { ProductService } from '../product-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  products!: Product[];
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.getProducts().then((data) => (this.products = data.slice(0, 20)));
}
}
export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}
