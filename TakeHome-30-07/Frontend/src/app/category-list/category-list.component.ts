import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../commons/product-category';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: ProductCategory[] = [];
  constructor(private catservice : ProductServiceService) { }

  ngOnInit(): void {
    console.log(this.listOfCategories())
  }

  listOfCategories(){
    this.catservice.getAllCategories().subscribe(data => {
      console.log(data)
      this.categories = data
    })
  }

}
