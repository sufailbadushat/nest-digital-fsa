import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emp-nav',
  templateUrl: './emp-nav.component.html',
  styleUrls: ['./emp-nav.component.css']
})
export class EmpNavComponent {
  constructor(private api:ApiService, private router:Router){}

  logOut=()=>{
    localStorage.clear
    this.router.navigate(['/employeeLogin'])
  }
}
