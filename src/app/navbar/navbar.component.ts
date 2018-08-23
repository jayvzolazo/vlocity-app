import { Component, OnInit } from '@angular/core';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faSearch);

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faSearch = faSearch;

  constructor() { }

  ngOnInit() {
  }

}
