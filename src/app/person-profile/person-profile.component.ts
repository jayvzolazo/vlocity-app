import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Person } from '../class/person';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope);

@Component({
  selector: 'app-person-profile',
  templateUrl: './person-profile.component.html',
  styleUrls: ['./person-profile.component.scss']
})
export class PersonProfileComponent implements OnInit {

  person: Person;

  evenlope = faEnvelope;
  tabs = ['About','Likes','Dislikes'];
  activeTab = this.tabs[0];

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPersonDetails();
  }

  getPersonDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id');
  }

  setTab(tabIndex: number): void {
    this.activeTab = this.tabs[tabIndex];
  }
}
