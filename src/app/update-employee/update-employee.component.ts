import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  id:any=localStorage.getItem("updateId")
  name = ""
  empCode=""
  designation = ""
  salary = ""
  companyName = ""
  address=""
  username=""
  password=""
  email=""



  constructor(private api:ApiService,private router:Router , private activatedRoute:ActivatedRoute){
    
    
  }

  readValues = () => {
   
    let data: any =
    { 
      "id":this.id,
      "name": this.name,
      "empCode":this.empCode,
      "designation": this.designation,
      "salary": this.salary,
      "companyName": this.companyName,
      "address":this.address,
      "username":this.username,
      "password":this.password,
      "email":this.email
    }
    console.log(data)

    this.api.updateEmployee(data).subscribe(
      (response:any) => {
        if(response.status=="success"){
          alert("Updated successfully");
         this.router.navigate([('/viewEmployee')])
          localStorage.removeItem("updateId");
          this.id=""
          console.log(this.id);
          
        }
        else{
          alert("something went wrong!");
        }
      }
    )
    
  }
  data:any=[]
}
