import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryComponent } from './add-category/category.component';
import { ProductComponent } from './add-product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const route : Routes = [
  {path:'',component:WelcomeComponent} , 
  {path : 'products',component : ProductListComponent } , 
  {path : 'categories' , component : CategoryListComponent},
  {path : 'newProduct' , component : ProductComponent},
  {path : 'newCategory' , component : CategoryComponent},
  {path : 'Home' , component : WelcomeComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    CategoryComponent,
    ProductComponent,
    ProductListComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
