import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  productDetails(){
      this.route.navigateByUrl("/product")
  }
  categoriesdetails(){
    this.route.navigateByUrl("/categories")
}
newproductdetails(){
  this.route.navigateByUrl("/newproduct")
}
newcategoriesdetails(){
  this.route.navigateByUrl("/newcategories")
}

}
