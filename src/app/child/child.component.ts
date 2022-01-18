import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() inputMessageParent = 'TO JEST RODZIC';
  @Input() timmer:any;
  @Output() freezedNumber = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  onEmit(){
    this.freezedNumber.emit(this.timmer)
  }
}
