import { Component } from '@angular/core';
import { ChildContentProjectionComponent } from "./child-content-projection/child-content-projection.component";

@Component({
  selector: 'app-content-projection',
  imports: [ChildContentProjectionComponent],
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.scss'
})
export class ContentProjectionComponent {



}
