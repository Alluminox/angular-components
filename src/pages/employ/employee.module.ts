import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeFormComponent } from '../../components/employee-form/employee-form.component';
import { EmployeeListComponent } from '../../components/employee-list/employee-list.component';
import { EmployeeModalComponent } from '../../components/employee-modal/employee-modal.component';
import { SalaryColorDirective } from '../../directive/salary-color.directive';
import { EmployeeComponent } from './employee.component';

@NgModule({
  declarations: [
    EmployeeFormComponent,
    EmployeeListComponent,
    EmployeeModalComponent,
    EmployeeComponent,
    SalaryColorDirective
  ],

  imports: [ FormsModule ],
  exports: [ EmployeeComponent ],
  providers: []
})
export class EmployeeModule {
}