import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './details-page/details-page.component';
import { HeaderComponent } from './header/header.component';
import {ScrollComponent} from './scroll/scroll.component'

const routes: Routes = [
  {
    path:'',component:HeaderComponent
  },
  {
    path:'detail',component:DetailsPageComponent
  },
  {
    path:'scroll',component:ScrollComponent
  }
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
