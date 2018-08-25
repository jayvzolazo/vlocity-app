import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faCaretDown, faSearch);

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [
    Location, {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ]
})
export class NavbarComponent implements OnInit {

  faSearch = faSearch;
  faCaretDown = faCaretDown;

  constructor(private location: Location) { }

  ngOnInit() { }

  goToPage(path: string): void {
    this.location.go(path);
  }
}
