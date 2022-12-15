import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {
  constructor(private api:ApiService, private router:Router){
    api.viewEmployee().subscribe(
      (response:any)=>{
        this.employee=response;
      }
    )
  }
  employee:any=[  ]

  updateEmployee=(id:any)=>{
    localStorage.setItem("updateId",id)
    console.log(id);
    
    this.router.navigate(['/updateEmployee']);
  }
}