import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-login',
  templateUrl: './security-login.component.html',
  styleUrls: ['./security-login.component.css']
})
export class SecurityLoginComponent {
  constructor(private api: ApiService, private router:Router) { }

  username = ""
  password = ""

  readValue = () => {
    let data: any = {
      "username": this.username,
      "password": this.password
    }

    console.log(data);

    this.api.securityLogin(data).subscribe(
      (response:any)=>{
        if(response.status=="success"){
          this.router.navigate(['/viewSecurity']);
        }
        else{
          this.username=""
          this.password=""
          alert("Invalid username or password!");
        }
      }
    )

  }
}
