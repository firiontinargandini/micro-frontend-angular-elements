import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from '../../confirmation-modal/confirmation-modal.component';
import { InformationModalComponent } from '../../information-modal/information-modal.component';

@Injectable({
  providedIn: 'root'
})
export class SharedModalService {
  constructor(private modalService: NgbModal) { }

  openModal(customEvent: any) {
    if (!customEvent.type) return;

    if (customEvent.type === 'confirmation') {
      const modalRef =  this.modalService.open(ConfirmationModalComponent);

      modalRef.componentInstance.title = customEvent.detail.title;
      modalRef.componentInstance.description = customEvent.detail.description;
      modalRef.componentInstance.option1 = customEvent.detail.option1;
      modalRef.componentInstance.option2 = customEvent.detail.option2;
    }

    if (customEvent.type === 'information') {
      const modalRef =  this.modalService.open(InformationModalComponent);

      modalRef.componentInstance.title = customEvent.detail.title;
      modalRef.componentInstance.description = customEvent.detail.description;
    }
  }
}
