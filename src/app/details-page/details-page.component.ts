import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductItemService } from '../../service/product.service';
import { Store } from '@ngrx/store';
import { Product } from '../main-page/main-page.component';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.scss',
})
export class DetailsPageComponent {
  sub: any;
  item :Product = { }
  images :any = []

  responsiveOptions: any[] | undefined;
  constructor(private productItemService: ProductItemService,
    private store:Store<any>) {}
  ngOnInit() {
    this.store.select('electronicStore').subscribe(
      res=>{
        console.log(res)
        this.item = res?.data
        this.images = this.item?.image
      }
    )
    this.sub = this.productItemService.getitem().subscribe((item) => {
      console.log(item);
    });
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
      },
      {
        breakpoint: '768px',
        numVisible: 5,
      },
      {
        breakpoint: '560px',
        numVisible: 5,
      },
    ];
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
