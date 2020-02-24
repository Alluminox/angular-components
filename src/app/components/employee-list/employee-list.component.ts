import { Component, Input } from '@angular/core';
import { EmployeeType } from '../../services/employee.service';


@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['employee-list.component.scss']
})
export class EmployeeListComponent {

  @Input()
  data: EmployeeType[] = [];

  constructor() {}
}