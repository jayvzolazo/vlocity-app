import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Person } from './class/person';
import { PERSONS } from './resources/persons';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  getPersons(): Observable<Person[]> {
    return of(PERSONS);
  }
}
