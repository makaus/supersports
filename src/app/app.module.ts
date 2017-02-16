import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { CustomHeaderComponent } from './customheader/customheader.component';
import { CustomFooterComponent } from './customfooter/customfooter.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { BannerComponent } from './banner/banner.component';
import { CategoriesComponent } from './categories/categories.component';
import { ShoesComponent } from './shoes/shoes.component';
import { ShoeDataService } from './shared/shoe-data.service';
import { ShoeDetailComponent } from './shoes/shoes-detail.component';


@NgModule({
  imports:      [ 
  BrowserModule,
  FormsModule,
  RouterModule.forRoot([
  		{path: 'home', component:MainComponent},
      	{path: 'support', component:ContactComponent},
  		{path: 'shoe/:id', component:ShoeDetailComponent},
  		{path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
  	])
  ],
  declarations: [ AppComponent, CustomHeaderComponent, CustomFooterComponent, MainComponent, BannerComponent, CategoriesComponent, ShoesComponent, ContactComponent, ShoeDetailComponent ],
  providers: [ ShoeDataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
