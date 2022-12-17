import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent {
  data:any={}
  constructor(private api:ApiService){

    let data:any={
      "id" : localStorage.getItem("id")
}

    api.searchTotal(data).subscribe(
      (generated:any)=>{
        this.data=generated[0];
      }
    )
  }

  reason=""
  typeOfleave=""
  from=""
  to=""
  readValue=()=>{
    let data2:any={   
      "reason" :this.reason,
      "status" :-1,
      "empid" : localStorage.getItem("id"),
      "typeOfleave" : this.typeOfleave,
      "remarks" : "not applicable",
      "from" : this.from,
      "to" : this.to,
      
}
    this.api.addLeaves(data2).subscribe(
      (generated:any)=>{
        if(generated.status=="success"){
          alert("leave applied")
          window.location.reload();
        }
      }
    )
  }

}