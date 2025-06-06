import { Component } from '@angular/core';

@Component({
  selector: 'app-child-templateref',
  imports: [],
  templateUrl: './child-templateref.component.html',
  styleUrl: './child-templateref.component.scss'
})
export class ChildTemplaterefComponent {

  counter : number = 0;

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }

}
