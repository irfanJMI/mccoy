import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductItemService } from '../../service/product.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.scss'
})
export class DetailsPageComponent {
  sub: any;
  images = [
    {
        itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1'
    },
    {
        itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2s.jpg',
        alt: 'Description for Image 2',
        title: 'Title 2'
    }];
    
  responsiveOptions: any[] | undefined;
  constructor(private productItemService:ProductItemService){

  }
  ngOnInit() {
   this.sub =  this.productItemService.getitem().subscribe(item=>{console.log(item)})
   this.responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 5
    },
    {
        breakpoint: '560px',
        numVisible: 5
    }
];
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
