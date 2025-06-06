import { Component, inject, OnInit } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { SideMenuComponent } from "./side-menu/side-menu.component";
import { HttpBackend, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-catelogue',
  imports: [ProductComponent, SideMenuComponent, CommonModule],
  templateUrl: './product-catelogue.component.html',
  styleUrl: './product-catelogue.component.scss'
})
export class ProductCatelogueComponent implements OnInit {

  private http = inject(HttpClient);
  localUrl$ = this.http.get('assets/json/product-catalog.json');
  api = this.http.get('https://rntl-cust-dev-api-8ja6q.ondigitalocean.app/v1/public/product-catalog');
  categories: string[] = [];
  cat: any;
  productsLists: any;

  ngOnInit(): void {
    this.localUrl$.subscribe((res: any) => {
      this.cat = res;
      console.log(typeof this.cat)
      console.log(this.cat.productLines.flat())
    })
  }

  recentlySelectedCategoty(event: any) {
    console.log({event})
    this.productsLists = event;
  }

}
