import { Component } from '@angular/core';
import { PERSONS } from './resources/persons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  persons = PERSONS;

  selectedObject = null;
  searchResult = false;

  setObject(detail): void {
    // console.log('selected person', detail);
    this.selectedObject = detail;
  }

  onSearchEvent(term): void {
    // console.log('term', term);
    this.searchResult = true;
  }
}
