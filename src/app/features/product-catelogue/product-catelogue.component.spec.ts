import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCatelogueComponent } from './product-catelogue.component';

describe('ProductCatelogueComponent', () => {
  let component: ProductCatelogueComponent;
  let fixture: ComponentFixture<ProductCatelogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCatelogueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCatelogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
