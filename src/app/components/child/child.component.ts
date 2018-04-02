import { Component, OnInit , Input } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() parentRef : ParentComponent;

  constructor() { }

  ngOnInit() {

  }

  onCallMethodInChild()
  {
     return 'Acess Child Ref'
  }

  onCallMethodInParent()
  {
     this.parentRef.messageParent = 'Acess Parent Ref';
  }

}
