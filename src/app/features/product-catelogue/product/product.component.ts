import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule, PageEvent} from '@angular/material/paginator';
@Component({
  selector: 'app-product',
  imports: [CommonModule,MatPaginatorModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit , AfterViewInit {

  @Input() products : any ;
  @ViewChild(MatPaginator) paginator! : MatPaginator;

  paginatedProducts: any[] = [];
  pageSize = 10;
  currentPage = 0;
  selectedProduct: any;

  ngOnInit(): void {
    // console.log("Products:",this.products);
      if (this.products?.products?.length) {
      this.paginateProducts();
    }
  }

   ngAfterViewInit() {
    this.paginator.page.subscribe((event: PageEvent) => {
      this.currentPage = event.pageIndex;
      this.pageSize = event.pageSize;
      this.paginateProducts();
    });
  }

  paginateProducts(): void {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedProducts = this.products.products.slice(start, end);
  }

  selectProduct(product: any) {
    console.log({product})
    this.selectedProduct = product;
    console.log("Selected product:",this.selectedProduct)
  }

}
