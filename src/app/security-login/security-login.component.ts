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
          localStorage.setItem("securityId",response.userInfo)
          this.router.navigate(['/security-profile']);
        }
        else{
          alert("Invalid username or password!");
        }
      }
    )

  }
}
