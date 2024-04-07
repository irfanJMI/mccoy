import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Categories } from '../../assets/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  items: MenuItem[] | undefined;
    value=''
    selectedCities = []
    sidebarVisible =false
  position: string = 'top';
    categories: any;
  ngOnInit() {
    this.categories = Categories
}
showSideBar(){
    this.sidebarVisible = true
}
}
