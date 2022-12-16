import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-visitors-log',
  templateUrl: './add-visitors-log.component.html',
  styleUrls: ['./add-visitors-log.component.css']
})
export class AddVisitorsLogComponent {
  constructor(private api:ApiService){}

  name=""
  phone=""
  purpose=""
  date=""
  time=""

  readValues=()=>{
    let data:any={
      "name":this.name,
      "phone":this.phone,
      "purpose":this.purpose,
      "date":this.date,
      "time":this.time
    }

    this.api.addVisitorLog(data).subscribe(
      (response:any)=>{
        console.log(response);
        if(response.status="success"){
          alert("Added successfully!");
          this.name=""
          this.phone=""
          this.purpose=""
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
