import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-profile',
  templateUrl: './security-profile.component.html',
  styleUrls: ['./security-profile.component.css']
})
export class SecurityProfileComponent {
  id: any = localStorage.getItem("securityId")

  constructor(private api: ApiService) {
    let data: any = { "id": this.id }

    api.getSecurityById(data).subscribe(
      (response: any) => {
        this.profile = response
      })
  }

  profile: any = []
}
