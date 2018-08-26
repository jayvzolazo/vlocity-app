import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  @Input() results: any;
  @Output() setProfile = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  viewProfile(person): void {
    console.log('view', person);

    this.setProfile.emit(person);
  }

}
