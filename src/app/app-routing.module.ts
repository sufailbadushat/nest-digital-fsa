import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { LmsEmpComponent } from './lms-emp/lms-emp.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:"updateEmployee", component:UpdateEmployeeComponent},
  {path:"searchEmployee", component:SearchEmployeeComponent},
  {path:"deleteEmployee", component:DeleteEmployeeComponent},
  {path:"employee-lms" , component:LmsEmpComponent},
  {path:"employee-profile" , component:EmployeeProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
