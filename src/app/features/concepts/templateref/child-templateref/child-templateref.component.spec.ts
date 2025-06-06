import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTemplaterefComponent } from './child-templateref.component';

describe('ChildTemplaterefComponent', () => {
  let component: ChildTemplaterefComponent;
  let fixture: ComponentFixture<ChildTemplaterefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildTemplaterefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildTemplaterefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
