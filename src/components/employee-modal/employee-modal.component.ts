import { Component, ElementRef } from '@angular/core';


declare const $: any;


@Component({
  selector: 'employee-modal',
  templateUrl: './employee-modal.component.html',
  styleUrls: [ './employee-modal.component.scss']
})
export class EmployeeModalComponent {

  constructor(private element: ElementRef) {}

  toggle() {
    // Busca o modal do DOM e dá um show pela API que o BO4 disponibiliza
    $(this.getModalElement()).modal('toggle');
  }

  private getModalElement() {
    // Acessa o modal do DOM
    const nativeElement = this.element.nativeElement;

    // Cast para HTMLElement
    return nativeElement.firstChild as HTMLElement;
  }
}

