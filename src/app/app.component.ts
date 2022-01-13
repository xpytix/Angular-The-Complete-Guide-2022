import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  visible = true;
  logArray: number[] = [];
  
  
  isVisible(){
    this.visible = !this.visible;
  }
  
  onToggleDetails(){
    this.visible = !this.visible;
    this.logArray.push(this.logArray.length+1);
  }
}
