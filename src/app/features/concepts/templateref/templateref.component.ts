import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildTemplaterefComponent } from './child-templateref/child-templateref.component';

@Component({
  selector: 'app-templateref',
  imports: [ChildTemplaterefComponent],
  templateUrl: './templateref.component.html',
  styleUrl: './templateref.component.scss'
})
export class TemplaterefComponent implements AfterViewInit {
  
  @ViewChild('singleRef')singleRef! : ElementRef;
  @ViewChildren('templateRef')vcName! : QueryList<any>;
  
  @ViewChild('childComponentRef')ccref! : ChildTemplaterefComponent;

  ngAfterViewInit(): void {
    
    // ViewChild with SingleRef

    this.singleRef.nativeElement.style.fontWeight = '900';


    // ViewChildren with SingleRef

    this.vcName.last.nativeElement.style.fontSize = '25px';
    this.vcName.first.nativeElement.style.fontSize = '10px';
    this.vcName.toArray()[1].nativeElement.style.fontSize = '18px';

    let elements = this.vcName.toArray();

    elements.forEach((el,i)=>{
      el.nativeElement.style.color="green";
    })
  }

  inc(){
    this.ccref.increment();
  }

  dec(){
    this.ccref.decrement();
  }

}
