import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { EmployeeModule } from '../pages/employ/employee.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EmployeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
