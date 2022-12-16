import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddEmployeesLogComponent } from './add-employees-log/add-employees-log.component';
import { AddVisitorsLogComponent } from './add-visitors-log/add-visitors-log.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { LmsEmpComponent } from './lms-emp/lms-emp.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { SecurityProfileComponent } from './security-profile/security-profile.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:"updateEmployee", component:UpdateEmployeeComponent},
  {path:"searchEmployee", component:SearchEmployeeComponent},
  {path:"deleteEmployee", component:DeleteEmployeeComponent},
  {path:"employee-lms" , component:LmsEmpComponent},
  {path:"security-profile" , component:SecurityProfileComponent},
  {path:"add-visitors-log" , component:AddVisitorsLogComponent},
  {path:"add-employees-log" , component:AddEmployeesLogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
