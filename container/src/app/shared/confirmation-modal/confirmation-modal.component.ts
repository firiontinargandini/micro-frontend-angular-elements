import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() option1!: string;
  @Input() option2!: string;

  constructor(
    public modal: NgbActiveModal
  ) { }

  sendResponse(res: string) {
    this.modal.close();

    const customEvent = new CustomEvent('modalResponse', { detail: res });
    window.dispatchEvent(customEvent);
  }
}
