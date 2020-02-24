import { Component, ElementRef, Output, EventEmitter } from '@angular/core';
import { EmployeeType, EmployeeService } from '../../services/employee.service';


declare const $: any;


@Component({
  selector: 'employee-modal',
  templateUrl: './employee-modal.component.html',
  styleUrls: [ './employee-modal.component.scss']
})
export class EmployeeModalComponent {

  employee: EmployeeType = {
    name: '',
    age: 0,
    salary: 0
  }

  /*
  Criando um atributo de saida que ira 'emitir um evento' que 'recebe como parametro'
  um objeto do tipo 'EmployeeType'
  */

  @Output()
  onSubmit: EventEmitter<EmployeeType> = new EventEmitter<EmployeeType>();

  constructor(private element: ElementRef, private employeeService: EmployeeService) {}

  toggle() {
    // Busca o modal do DOM e dá um show pela API que o BO4 disponibiliza
    $(this.getModalElement()).modal('toggle');
  }


  saveEmployee() {
    this.employeeService.add(this.employee);

    /*
    Emite o o evento passando o employeeType
    */
    this.onSubmit.emit(this.employee)

    this.employee = {
      name: '',
      age: 0,
      salary: 0
    }

    this.toggle();
  }

  private getModalElement() {
    // Acessa o modal do DOM
    const nativeElement = this.element.nativeElement;

    // Cast para HTMLElement
    return nativeElement.firstChild.firstChild as HTMLElement;
  }
}

