import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

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
    cities: { name: string; code: string; }[] = [];
  ngOnInit() {
    this.cities = [
        {name: 'Fan', code: 'FAN'},
        {name: 'Cooler', code: 'COOLER'},
        {name: 'Lights', code: 'LIGHTS'},
        {name: 'Washing Machine', code: 'WASHING'},
        {name: 'TV', code: 'TV'}
    ];
}
showSideBar(){
    this.sidebarVisible = true
}
}
