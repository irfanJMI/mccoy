import { NgModule, isDevMode } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from 'primeng/panel';
import { MainPageComponent } from './main-page/main-page.component';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { SidebarModule } from 'primeng/sidebar';
import { DetailsPageComponent } from './details-page/details-page.component';
import { GalleriaModule } from 'primeng/galleria';
import { FieldsetModule } from 'primeng/fieldset';
import { StoreModule } from '@ngrx/store';
import { reducer } from './+state/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ScrollComponent } from './scroll/scroll.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    DetailsPageComponent,
    ScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PanelModule,
    DataViewModule,
    ButtonModule,
    FormsModule,
    MultiSelectModule,
    SidebarModule,
    GalleriaModule,
    FieldsetModule,
    NgxPageScrollModule,
    StoreModule.forRoot({
      electronicStore: reducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
