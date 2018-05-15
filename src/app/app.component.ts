import { Component } from '@angular/core';
import { constant } from './app-constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    console.log("constant", constant.url);
   }
  
  title = 'app';
}
