import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductShowComponent } from './product-show/product-show.component';


//configure routes

const appRoutes: Routes =[
  {
    path:"",component: HomeComponent
  },
  {
    path:"products",component: ProductListComponent,
    data: {title: "Product List"}
  },
  {
    path:"products-details/:id",component:ProductDetailComponent ,
    data: {title: "Product Detials"}
  },
  {
    path:"products-add",component:ProductAddComponent ,
    data: {title: "Product Add"}
  },
  {
    path:"products-edit/:id",component:ProductEditComponent ,
    data: {title: "Product Edit"}
  },
  {
    path:"**",
    redirectTo:'/'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductListComponent,
    ProductShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
