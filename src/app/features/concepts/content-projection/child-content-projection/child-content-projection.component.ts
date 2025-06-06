import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child-content-projection',
  imports: [],
  templateUrl: './child-content-projection.component.html',
  styleUrl: './child-content-projection.component.scss'
})
export class ChildContentProjectionComponent {
@ContentChild("mid")contentC! : ElementRef;

  ngAfterContentInit() {
    console.log("ContentC",this.contentC)
  }
}
