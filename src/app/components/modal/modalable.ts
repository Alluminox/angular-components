import { ViewChild } from '@angular/core';
import { ModalComponent } from './modal.component';

export class Modable {

    @ViewChild(ModalComponent)
    private modalComponent: ModalComponent

    toggle() {
       this.modalComponent.toggle();
    }
}