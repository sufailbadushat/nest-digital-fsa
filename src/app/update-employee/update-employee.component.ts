import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  toUpdate:any=[]



  constructor(private api:ApiService,private router:Router ){
    let id:any={"id":this.id}
   api.getById(id).subscribe(
    (response:any)=>{
      console.log(response);
      this.empCode= response[0].empCode
        this.name= response[0].name
        this.email= response[0].email
        this.address= response[0].address
        this.designation= response[0].designation
        this.username= response[0].username
        this.password=response[0].password
        this.salary=response[0].salary
    }
   )
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
         this.router.navigate([('/searchEmployee')])
          localStorage.removeItem('updateId');
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
