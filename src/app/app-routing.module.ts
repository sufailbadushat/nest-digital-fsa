import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeesLogComponent } from './add-employees-log/add-employees-log.component';
import { AddVisitorsLogComponent } from './add-visitors-log/add-visitors-log.component';
import { AdminLmsComponent } from './admin-lms/admin-lms.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { LeaveStatusComponent } from './leave-status/leave-status.component';
import { LmsEmpComponent } from './lms-emp/lms-emp.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { SecurityProfileComponent } from './security-profile/security-profile.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:"updateEmployee", component:UpdateEmployeeComponent},
  {path:"searchEmployee", component:SearchEmployeeComponent},
  {path:"deleteEmployee", component:DeleteEmployeeComponent},
  {path:"security-profile" , component:SecurityProfileComponent},
  {path:"add-visitors-log" , component:AddVisitorsLogComponent},
  {path:"add-employees-log" , component:AddEmployeesLogComponent},
  {path:"employee-profile" , component:EmployeeProfileComponent},
  {path:"apply-leave" , component:ApplyLeaveComponent},
  {path:"leave-status", component:LeaveStatusComponent},
  {path:"admin-lms", component:AdminLmsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
