import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  name = ""
  empCode=""
  designation = ""
  salary = ""
  companyName = ""
  address=""
  username=""
  password=""



  constructor(private api:ApiService){}

  readValues = () => {
    let data: any =
    {
      "name": this.name,
      "empCode":this.empCode,
      "designation": this.designation,
      "salary": this.salary,
      "companyName": this.companyName,
      "address":this.address,
      "username":this.username,
      "password":this.password
    }
    console.log(data)

    this.api.addEmployee(data).subscribe(
      (response:any) => {
        if(response.status=="success"){
          alert("Registerd successfully");
          this.name=""
          this.empCode=""
          this.designation = ""
          this.salary = ""
          this.companyName = ""
          this.address=""
          this.username=""
          this.password=""
        
        
        }
        else{
          alert("something worong!");
        }
      }
    )
    
  }
  data:any=[]
}
