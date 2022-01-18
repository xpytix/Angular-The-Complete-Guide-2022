import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grandparent',
  templateUrl: './grandparent.component.html',
  styleUrls: ['./grandparent.component.css']
})
export class GrandparentComponent implements OnInit {

  messageFromGrandparent = 'JESTEM DZIADEK';
  no = 123;
  counter :any;
  constructor() { }

  ngOnInit(): void {
  }
  mgsDisplay(event: any){
    this.counter = event
  }
}
