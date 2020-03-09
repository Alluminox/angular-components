import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { EmployeeType, EmployeeService } from '../../services/employee.service';
import { ModalComponent } from '../modal/modal.component';
import { Modable } from '../modal/modalable';

@Component({
  selector: 'employee-modal',
  templateUrl: './employee-modal.component.html',
  styleUrls: [ './employee-modal.component.scss']
})
export class EmployeeModalComponent extends Modable  {

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

  constructor(private employeeService: EmployeeService) {
    super()
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


  hideEmployeeModal(event) {
    console.log('Hide Event => ', event);
  }

}

