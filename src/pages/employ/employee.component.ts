import { Component, ViewChild } from '@angular/core';
import { EmployeeModalComponent } from 'src/components/employee-modal/employee-modal.component';

@Component({
  selector: 'employee',
  styleUrls: ['./employee.component.scss'],
  templateUrl: './employee.component.html'
})
export class EmployeeComponent  {

  /*
  Busca o component 'EmployeeModalComponent' e popula a propriedade 'employeeModal' 
  com a instancia criada pelo proprio Angular
  */
  @ViewChild(EmployeeModalComponent)
  employeeModal: EmployeeModalComponent;


  employeeFormModal() {
    if (this.employeeModal) {
      this.employeeModal.toggle();
    }
  }

}