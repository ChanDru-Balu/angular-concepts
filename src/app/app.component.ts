import { Component, inject, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
// import { SimpleComponent } from "./features/ui-design/simple/simple.component";
// import { ChildComponent } from "./child/child.component";
// import { ProductCatelogueComponent } from "./features/product-catelogue/product-catelogue.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    // ProductCatelogueComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  parentToChild : string = '';
  title = 'concepts';
  form : any;
  private fb = inject(FormBuilder);
  varNew : string = '';

  constructor(){
    this.form =  this.fb.group({
      valueForChild : ['']
    })
  }

  passValue(){
    console.log('Form Value:',this.form.value);
    this.parentToChild = this.form.value.valueForChild;
  }

  changeValues(event:any){
    console.log(event.target?.value)
    // console.log("value:",this.varNew)
  }

}
