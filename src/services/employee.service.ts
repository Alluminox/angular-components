import { Injectable } from '@angular/core';

export interface EmployeeType {
  id?: number,
  name: string,
  age: number,
  salary: number
}


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: EmployeeType[] = [];

  findIndex(employee: EmployeeType) {
    return this.employees.findIndex(item => item.id === employee.id);
  }

  update(employee) {
    const index = this.findIndex(employee);
    if (index) {
      this.employees[index] = Object.assign({}, employee);
    }
  }

  destroy(employee) {
    this.employees = this.employees.filter(item => item.id !== employee.id);
  }

  add(data: EmployeeType) {
    const id = this.employees.length + 1;
    this.employees.push( Object.assign({}, data, { id }));
  }

}