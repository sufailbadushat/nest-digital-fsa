import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FormsModule } from '@angular/forms';
import { NavBarAdminMainComponent } from './nav-bar-admin-main/nav-bar-admin-main.component';


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
  },
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    NavBarAdminMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
