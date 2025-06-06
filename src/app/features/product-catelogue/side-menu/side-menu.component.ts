import { Component, EventEmitter, inject, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-side-menu',
  imports: [MatExpansionModule, MatTabsModule, MatSliderModule, MatCheckboxModule, CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
  // encapsulation: ViewEncapsulation.None
})
export class SideMenuComponent implements OnInit {

  @Input() cat: any;
  @Output() updateCategory = new EventEmitter();

  panelOpenState: boolean = false;
  subCategoryOpen: boolean = false;

  categories: string[] = [];
  selectedCategory: any;
  filters: any;
  filterObject: any = {};

  ngOnInit(): void {
    // console.log("Cat:",this.cat)
  }

  viewAll(mainCategory: any) {
    console.log({mainCategory})
    let name = mainCategory.name ;
    let products = [];
    for(let cat of mainCategory.categories){
      for(let subCat of cat.subCategories){
        products.push(...subCat.products)
      }
    }
    console.log({products})
    let category = {
      name ,
      products
    }
    this.updateCategory.emit(category)
  }

  trackById(index: number, item: any) {
    return item.id;
  }

  subCategorySelected(category: any) {
    this.selectedCategory = category;
    this.filters = category.filters;
    console.log("Filters:", this.filters);
    this.updateCategory.emit(category)
  }

  onRangeChange(filter: any, start: any, end: any) {
    console.log({ filter, start, end })
    this.filterObject[filter.label] = {
      type: 'number',
      start: start,
      end: end
    }
    console.log("Obj:", this.filterObject)
  }

  onOptionSelected(filter: any, option: any, event: any) {

    let options = this.filterObject[filter.label]?.options ?? [];
    console.log(event.checked)
    if (event.checked) {
      console.log('selected')
      options.push(option)
    } else {
      console.log('deselected')
      options = options.filter((existingOption: any) => existingOption != option)
    }

    console.log({ options })
    this.filterObject[filter.label] = {
      type: 'string',
      options: options
    }
    console.log(this.filterObject)
  }

  clearAllFilter() {
    Object.keys(this.filterObject).forEach(key => {
      delete this.filterObject[key];
    })
    console.log("FilterObject:", this.filterObject);
  }

  applyFilter() {


    this.selectedCategory.products = this.selectedCategory.products.filter((product: any) => {
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

  }


}
