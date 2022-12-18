import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-lms',
  templateUrl: './admin-lms.component.html',
  styleUrls: ['./admin-lms.component.css']
})
export class AdminLmsComponent {
  data: any = []
  remarks = ""

  constructor(private api: ApiService) {
    let data1: any = {

      "empid": localStorage.getItem("id")

    }

    api.viewLeavesAdmin().subscribe(
      (response: any) => {
        this.data = response
      }
    )

  }
  approve = (value: any, value2: any, value3: any, value4: any) => {
    let data2: any = {

      "status": 1,
      "id": value,
      "remarks": this.remarks
    }
    this.api.editLeaves(data2).subscribe(
      (generatd: any) => {
        if (generatd.status == "success") {
          alert("Approved")
          let data3: any = {}
          if (value3 == "casual") {
            data3 = {

              "empId": value2,
              "casualLeave": value4,
              "sickLeave": 0,
              "specialLeave": 0
            }
          } else if (value3 == "sick") {
            data3 = {

              "empId": value2,
              "casualLeave": 0,
              "sickLeave": value4,
              "specialLeave": 0
            }
          } else {
            data3 = {

              "empId": value2,
              "casualLeave": 0,
              "sickLeave": 0,
              "specialLeave": value4
            }
            console.log(data3)
          }

          this.api.editTotalLeaves(data3).subscribe(
            (generated: any) => {
              console.log(data3)
              console.log(generated)
            }
          )
          window.location.reload();
        }
      }
    )
    console.log(data2)
  }
  reject = (value: any) => {
    let data2: any = {

      "status": 0,
      "id": value,
      "remarks": this.remarks
    }
    this.api.editLeaves(data2).subscribe(
      (generatd: any) => {
        if (generatd.status == "success") {
          alert("Rejected")
          window.location.reload();
        }
      }
    )
    window.location.reload();
  }


}
