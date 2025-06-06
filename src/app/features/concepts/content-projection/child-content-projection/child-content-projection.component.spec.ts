import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildContentProjectionComponent } from './child-content-projection.component';

describe('ChildContentProjectionComponent', () => {
  let component: ChildContentProjectionComponent;
  let fixture: ComponentFixture<ChildContentProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildContentProjectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildContentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
