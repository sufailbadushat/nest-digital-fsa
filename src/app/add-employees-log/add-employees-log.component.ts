import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employees-log',
  templateUrl: './add-employees-log.component.html',
  styleUrls: ['./add-employees-log.component.css']
})
export class AddEmployeesLogComponent {
  name=""
  date=""
  time=""
  empCode=""
  constructor(private api:ApiService){}

  readValues=()=>{
    let data:any={
      "empCode":this.empCode,
      "name":this.name,
      "date":this.date,
      "time":this.time
    }

    this.api.addEmployeeLog(data).subscribe(
      (response:any)=>{
        if(response.status="success"){
          alert("Added successfully!");
          this.name=""
          this.empCode=""
          this.date=""
          this.time=""
        }
        else{
          alert("Something went wrong");
        }
      }
    )

  }
}
