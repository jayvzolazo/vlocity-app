import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Person } from '../class/person';
import { PersonService } from '../person.service';

import { PERSONS } from '../resources/persons';

@Component({
  selector: 'app-persons-sidebar',
  templateUrl: './persons-sidebar.component.html',
  styleUrls: ['./persons-sidebar.component.scss']
})
export class PersonsSidebarComponent implements OnInit {
  // event declaration
  // @Output() setPerson = new EventEmitter<any>();

  selectedPerson: Person;

  persons: Person[];
  selected = [];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPersons();
  }

  getPersons(): void {
    this.personService.getPersons()
        .subscribe(persons => this.persons = persons);
  }

  onSelect(person: Person, index: number): void {
    // clear any selection and set the selected index to active mode
    this.selected = [];
    this.selected[index] = true;

    this.selectedPerson = person;
    // event usage
    // this.setPerson.emit(person);
  }

}
