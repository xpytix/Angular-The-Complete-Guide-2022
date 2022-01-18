import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @Input() inputMessage: any;
  @Output() inputNumber =new EventEmitter<any>();
   counter:number =1 ;
  numberSave!: any;
  messageFromParent: any;
  constructor() { }

  ngOnInit(): void {
    setInterval(
      ()=> {this.counter++}, 1000
      
    )
    console.log(this.counter);
    
  }
  mgsDisplay(event: any){
    this.numberSave = event
  }
  onEmit(){
    this.inputNumber.emit(this.numberSave);
  }
}
