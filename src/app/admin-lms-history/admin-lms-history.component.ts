import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-lms-history',
  templateUrl: './admin-lms-history.component.html',
  styleUrls: ['./admin-lms-history.component.css']
})
export class AdminLmsHistoryComponent {
  data: any = []
  remarks = ""

  constructor(private api: ApiService) {
   

    api.viewLeavesAdmin().subscribe(
      (response: any) => {
        this.data = response
      }
    )
    }

}
