import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductModule } from './Product/product/product.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports:      [ BrowserModule, AppRoutingModule , ProductModule ],
  declarations: [ AppComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
