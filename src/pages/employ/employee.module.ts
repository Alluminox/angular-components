import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SalaryColorDirective } from '../../directive/salary-color.directive';

import { EmployeeComponent } from './employee.component';
import { EmployeeModalComponent } from '../../components/employee-modal/employee-modal.component';
import { EmployeeListComponent } from '../../components/employee-list/employee-list.component';
import { EmployeeModalEditComponent } from 'src/components/employee-modal-edit/employee-modal-edit.component';
import { EmployeeModalDeleteComponent } from 'src/components/employee-modal-delete/employee-modal-delete.component';
import { SearchPipe } from 'src/pipes/search.pipe';




@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeModalComponent,
    EmployeeModalEditComponent,
    EmployeeModalDeleteComponent,
    EmployeeComponent,
    SalaryColorDirective,
    SearchPipe
  ],

  imports: [ 
    FormsModule,
    CommonModule
  ],
  exports: [ 
    EmployeeComponent,
    SearchPipe
  ],
  providers: []
})
export class EmployeeModule {

}