import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-information-modal',
  templateUrl: './information-modal.component.html',
  styleUrls: ['./information-modal.component.scss']
})
export class InformationModalComponent {
  @Input() title!: string;
  @Input() description!: string;

  constructor(
    public activeModal: NgbActiveModal
  ) { }
}
