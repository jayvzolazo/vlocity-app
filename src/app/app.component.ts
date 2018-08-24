import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Vlocity';

  selectedObject = null;

  setObject(detail): void {
    // console.log('selected person', detail);
    this.selectedObject = detail;
  }
}
