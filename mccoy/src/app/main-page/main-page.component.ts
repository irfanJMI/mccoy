import { Component } from '@angular/core';
import { ProductService } from '../product-service.service';
import { Router } from '@angular/router';
import { ProductItemService } from '../../service/product.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  products!: Product[];
  constructor(private productService: ProductService,private router:Router,private productItemService:ProductItemService) {}
  ngOnInit() {
    
    this.productService.getProducts().then((data) => (this.products = data.slice(0, 20)));
}
  showDetails(item:any){
    console.log(item)
    this.productItemService.setItem(item)
    this.router.navigate(['/detail'])

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
