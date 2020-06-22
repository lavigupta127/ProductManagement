import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from '../Product/product-list/product-list.component';
import { HomeComponent } from '../home/home.component';
import { ProductDetailsComponent } from '../Product/product-details/product-details.component';
import { SaveProductComponent } from '../Product/save-product/save-product.component';

const routes = [
  { path : '', component : HomeComponent},
  {path : 'products', component : ProductListComponent},
  { path: 'product/:id', component: ProductDetailsComponent},
  { path: 'save-product/:id', component: SaveProductComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }