import { Component, OnInit, Input } from '@angular/core';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope);

@Component({
  selector: 'app-person-profile',
  templateUrl: './person-profile.component.html',
  styleUrls: ['./person-profile.component.scss']
})
export class PersonProfileComponent implements OnInit {

  @Input() person: any;

  evenlope = faEnvelope;
  tabs = ['About','Likes','Dislikes'];
  activeTab = this.tabs[0];

  constructor() { }

  ngOnInit() { }

  setTab(tabIndex: number): void {
    this.activeTab = this.tabs[tabIndex];
  }
}
