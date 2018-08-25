import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() onSearchEvent = new EventEmitter<any>();  

  faSearch = faSearch;
  faCaretDown = faCaretDown;

  constructor(private location: Location) { }

  ngOnInit() { }

  private search(term: any): void {
    this.onSearchEvent.emit(term);
  }

  goToPage(path: string): void {
    this.location.go(path);
  }

  onEnter(searchTerm: any): void {
    this.search(searchTerm);
  }

  onSearch(searchTerm: any): void {
    this.search(searchTerm);
  }
}
