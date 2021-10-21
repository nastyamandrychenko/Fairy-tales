import { Component } from '@angular/core';
import { EMAIL_ERROR } from './constants/texts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = EMAIL_ERROR;
}
