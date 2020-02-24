import { Component } from '@angular/core';
import { EmployeeService, EmployeeType } from '../../services/employee.service';

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: [ './employee-form.component.scss' ]
})
export class EmployeeFormComponent {

  employee: EmployeeType = {
    name: '',
    age: 0,
    salary: 0
  }

  constructor(private employeeService: EmployeeService) {

  }

  saveEmployee() {
    this.employeeService.add(this.employee);
    this.employee = {
      name: '',
      age: 0,
      salary: 0
    }
  }
}