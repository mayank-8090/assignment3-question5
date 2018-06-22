import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<button (click)="fun()">Click me!</button>
  {{title}}`,
  styleUrls: ['./app.component.css']
})
export class AppComponent
 {
   title='Marvellous Infosystem';
   fun()
   {
    this.title= 'Button Click';
  
   }
}
