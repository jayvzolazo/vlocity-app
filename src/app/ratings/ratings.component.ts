import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {
  @Input() ratings: any;

  rateMaxCount = 5;
  profileRates = [
    false,
    false,
    false,
    false,
    false
  ];
  rateCount = 0;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    this.profileRates = [
      false,
      false,
      false,
      false,
      false
    ];
    this.rateCount = 0;

    while (this.rateCount < this.ratings) {
      this.profileRates[this.rateCount] = true;

      this.rateCount++;
    }

    console.log('this.profileRates', this.profileRates);
  }
}
