import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Person} from '../class/person';
import { PERSONS } from '../resources/persons';

@Component({
  selector: 'app-persons-sidebar',
  templateUrl: './persons-sidebar.component.html',
  styleUrls: ['./persons-sidebar.component.scss']
})
export class PersonsSidebarComponent implements OnInit {
  // event declaration
  @Output() setPerson = new EventEmitter<any>();

  persons = PERSONS;

  constructor() { }

  ngOnInit() { }

  onSelect(person: Person): void {
    // event usage
    this.setPerson.emit(person);
  }

}
