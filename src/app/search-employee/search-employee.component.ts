import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {

  
  empCode = ""
  employeeSearch: any = []
  constructor(private api: ApiService, private router:Router) {

//view all employee
    api.viewEmployee().subscribe(
      (response)=>{
        this.employeeSearch=response
        
      }
    )
   }

//search employee
  searchEmployee = () => {
    let data: any = { "empCode": this.empCode }
  
    this.api.searchEmployee(data).subscribe(
      (response: any) => {
        if (response.length != 0 ) {
          this.employeeSearch = response
          
        console.log(this.employeeSearch);
        }
        else {
          alert("Invalid employee code!");
        }
      }
    )
  }


//update employee navigate

updateEmployee=(id:any)=>{
  localStorage.setItem("updateId",id)
  console.log(id);
  
  this.router.navigate(['/updateEmployee']);
}




}
