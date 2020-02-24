import { Component, ViewChild } from '@angular/core';
import { EmployeeModalComponent } from 'src/components/employee-modal/employee-modal.component';

import { EmployeeType, EmployeeService } from '../../services/employee.service';
import { EmployeeModalEditComponent } from 'src/components/employee-modal-edit/employee-modal-edit.component';
import { EmployeeModalDeleteComponent } from 'src/components/employee-modal-delete/employee-modal-delete.component';

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

  @ViewChild(EmployeeModalEditComponent)
  employeeModalEditModal: EmployeeModalEditComponent;

  @ViewChild(EmployeeModalDeleteComponent)
  employeeModalDeleteComponent: EmployeeModalDeleteComponent;


  searchText: string;
  employee : EmployeeType;
  employeeToRemove : EmployeeType;
  employeeToEdit : EmployeeType;

  showMessageSuccess:boolean = false;

  constructor(public employeeService: EmployeeService) {}

  onNewEmployee(employee: EmployeeType) {
    this.showMessageSuccess = !this.showMessageSuccess
    this.employee = employee;

  }
  
  onUpdateEmployee(employee: EmployeeType) {
    this.employeeService.update(employee);
    this.employee = employee;
  }

  onDeleteEmployee(employee: EmployeeType) {
    this.employeeService.destroy(employee);
    this.employee = employee;
  }


  employeeCreateFormModal() {
    if (this.employeeModal) {
      this.employeeModal.toggle();
    }
  }

  employeeUpdateFormModal(employee: EmployeeType) {
    this.employeeToEdit = employee;
    this.employeeModalEditModal.toggle();
  }

  employeeDeleteFormModal(employee: EmployeeType) {
    this.employeeToRemove = employee;
    this.employeeModalDeleteComponent.toggle();

  }
}