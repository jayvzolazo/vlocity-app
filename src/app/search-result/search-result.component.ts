import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  @Input() results: any;

  constructor() { }

  ngOnInit() { }

  viewProfile(person): void {
    console.log('view', person);
    // TODO: must create a router now
  }

}