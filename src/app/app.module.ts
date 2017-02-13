import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CustomHeaderComponent } from './customheader/customheader.component';
import { CustomFooterComponent } from './customfooter/customfooter.component';
import { MainComponent } from './main/main.component';
import { BannerComponent } from './banner/banner.component';
import { CategoriesComponent } from './categories/categories.component';
import { ShoesComponent } from './shoes/shoes.component';
import { ShoeDataService } from './shared/shoe-data.service';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CustomHeaderComponent, CustomFooterComponent, MainComponent, BannerComponent, CategoriesComponent, ShoesComponent ],
  providers: [ ShoeDataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
