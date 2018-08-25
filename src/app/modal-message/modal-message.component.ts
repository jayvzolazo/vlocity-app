import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.scss']
})
export class ModalMessageComponent implements OnInit {

  @Input() person: string;

  messageSent = false;

  constructor() { }

  ngOnInit() { }

  sendMessage(): void {
    this.messageSent = true;
  }

}
