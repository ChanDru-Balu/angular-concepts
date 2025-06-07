import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
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
export class ProductCatelogueComponent implements OnInit, AfterViewInit {

  @ViewChild('prodChild') productListChild!: ProductComponent;

  private http = inject(HttpClient);
  localUrl$ = this.http.get('assets/json/product-catalog.json');
  api = this.http.get('https://rntl-cust-dev-api-8ja6q.ondigitalocean.app/v1/public/product-catalog');
  categories: string[] = [];
  cat: any;
  productsLists: any;
  filterObject: any;
  originalProductList: any;

  ngOnInit(): void {
    this.localUrl$.subscribe((res: any) => {
      this.cat = res;
      console.log(typeof this.cat)
      console.log(this.cat.productLines.flat())
    })
  }

  ngAfterViewInit(): void {
    console.log("Init:", this.productListChild);
  }

  recentlySelectedCategoty(event: any) {
    console.log({ event })
    this.productsLists = event;

    this.originalProductList = [...event.products];
  }

  getAppliedCategory(event: any) {
    console.log({ event })
    console.log("Product List:", this.productsLists);
    console.log("Product List:", this.productsLists);
    this.filterObject = event;

    if (!event || Object.keys(event).length === 0) {
      // Reset to original products if filter is cleared
      this.productsLists.products = [...this.originalProductList];
      this.productListChild.paginateProducts();
      return;
    }

    this.productsLists.products = this.originalProductList.filter((product: any) => {
      for (let key in product.productFilters) {
        for (let customKey in this.filterObject) {
          if (key.toLowerCase().replace(/\s/g, "") == customKey.toLowerCase().replace(/\s/g, "")) {
            if (this.filterObject[customKey].type == 'string') {
              return this.filterObject[customKey].options.includes(product.productFilters[key]);
            }
            if (this.filterObject[customKey].type == 'number') {
              return this.filterObject[customKey].start <= product.productFilters[key] && this.filterObject[customKey].end >= product.productFilters[key]
            }
          }
        }
      }
    })

    this.productListChild.paginateProducts();

  }

}
