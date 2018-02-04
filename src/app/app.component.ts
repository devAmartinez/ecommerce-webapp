import { Component } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Ecommerce webApp en Angular 5 (MEAN)';

  toggleTitle(){
    $('.title').slideToggle();
  }
}
