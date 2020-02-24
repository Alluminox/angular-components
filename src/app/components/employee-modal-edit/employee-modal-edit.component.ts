import { Component, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { EmployeeType } from '../../services/employee.service';

declare const $: any;


@Component({
  selector: 'employee-modal-edit',
  templateUrl: './employee-modal-edit.component.html',
  styleUrls: [ './employee-modal-edit.component.scss']
})
export class EmployeeModalEditComponent {

  @Input()
  employee: EmployeeType;

  /*
  Criando um atributo de saida que ira 'emitir um evento' que 'recebe como parametro'
  um objeto do tipo 'EmployeeType'
  */

  @Output()
  onSubmit: EventEmitter<EmployeeType> = new EventEmitter<EmployeeType>();

  constructor(private element: ElementRef) {}

  updateEmployee() {
    this.onSubmit.emit(this.employee)
    this.toggle();
  }

  toggle() {
    // Busca o modal do DOM e dá um show pela API que o BO4 disponibiliza
    $(this.getModalElement()).modal('toggle');
  }

  private getModalElement() {
    // Acessa o modal do DOM
    const nativeElement = this.element.nativeElement;

    // Cast para HTMLElement
    return nativeElement.firstChild.firstChild as HTMLElement;
  }
}

