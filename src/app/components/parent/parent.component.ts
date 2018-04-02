import { Component, OnInit,ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild(ChildComponent) childComponent : ChildComponent;

  messageParent : string;

  constructor() { }

  ngOnInit() {
  }

  onChildToParentOne()
  {
    this.messageParent = this.childComponent.onCallMethodInChild();
  }

}
