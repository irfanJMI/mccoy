import { Component } from '@angular/core';
import { ProductService } from '../product-service.service';
import { Router } from '@angular/router';
import { ProductItemService } from '../../service/product.service';
import { Store } from '@ngrx/store';
import * as actions from './../+state/app.actions'
import { ProductsData } from '../../assets/data';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  products!: any[];
  constructor(
    private productService: ProductService,
    private router: Router,
    private productItemService: ProductItemService,
    private store:Store
  ) {}
  ngOnInit() {
    this.products = ProductsData
  }
  showDetails(item: any) {
    console.log(item);
    // this.productItemService.setItem(item);
    // this.store.dispatch(new actions.FilterDataAction(item))
    // this.router.navigate(['/detail']);
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
