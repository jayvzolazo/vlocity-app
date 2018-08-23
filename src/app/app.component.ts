import { Component } from '@angular/core';

import { PERSONS } from './resources/persons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Vlocity';

  persons = PERSONS;
}
