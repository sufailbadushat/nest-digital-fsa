import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leave-status',
  templateUrl: './leave-status.component.html',
  styleUrls: ['./leave-status.component.css']
})
export class LeaveStatusComponent {
  leave:any=[]

  constructor(private api:ApiService){
    let data:any={
    
      "empid" : localStorage.getItem("id")

}

    this.api.leaveStatus(data).subscribe(
      (response:any)=>{
        this.leave=response
      }
    )
  
  }
}