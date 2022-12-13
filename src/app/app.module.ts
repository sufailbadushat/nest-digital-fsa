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
    path:"deleteEmployee",
    component:DeleteEmployeeComponent
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
    DeleteEmployeeComponent
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
