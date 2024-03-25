import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrl: './scroll.component.scss'
})
export class ScrollComponent {
 
@HostListener("window:scroll", ["$event"])
onWindowScroll() {
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
    console.log('bottom');
}
}
  
}
