import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FormsModule } from '@angular/forms';
import { NavBarAdminMainComponent } from './nav-bar-admin-main/nav-bar-admin-main.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { UserLoginComponent } from './user-login/user-login.component';
import { EmployeePotrtalComponent } from './employee-potrtal/employee-potrtal.component';
import { SecurityLoginComponent } from './security-login/security-login.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmpNavComponent } from './emp-nav/emp-nav.component';
import { LmsEmpComponent } from './lms-emp/lms-emp.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { SecurityProfileComponent } from './security-profile/security-profile.component';
import { AddVisitorsLogComponent } from './add-visitors-log/add-visitors-log.component';
import { AddEmployeesLogComponent } from './add-employees-log/add-employees-log.component';
import { SecurityNavComponent } from './security-nav/security-nav.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { LeaveStatusComponent } from './leave-status/leave-status.component';
import { AdminLmsComponent } from './admin-lms/admin-lms.component';
import { AdminLmsHistoryComponent } from './admin-lms-history/admin-lms-history.component';


let myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"adminLogin",
    component:AdminLoginComponent
  },
  {
    path:"adminDashboard",
    component:AdminDashboardComponent
  }
  ,
  {
    path:"employeeAdd",
    component:AddEmployeeComponent
  },
  {
    path:"viewEmployee",
    component:ViewEmployeeComponent
  },
  {
    path:"employeePortal",
    component:EmployeePotrtalComponent
  },
  {
    path:"employeeLogin",
    component:UserLoginComponent
  },
  {
    path:"securityLogin",
    component:SecurityLoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    NavBarAdminMainComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    SearchEmployeeComponent,
    DeleteEmployeeComponent,
    UserLoginComponent,
    EmployeePotrtalComponent,
    SecurityLoginComponent,
    UpdateEmployeeComponent,
    EmpNavComponent,
    LmsEmpComponent,
    EmployeeProfileComponent,
    SecurityProfileComponent,
    AddVisitorsLogComponent,
    AddEmployeesLogComponent,
    SecurityNavComponent,
    ApplyLeaveComponent,
    LeaveStatusComponent,
    AdminLmsComponent,
    AdminLmsHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
