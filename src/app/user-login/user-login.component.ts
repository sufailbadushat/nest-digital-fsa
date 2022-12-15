import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {


  username = ""
  password = ""

  constructor(private route: Router, private api: ApiService) { }
  searchUsers:any=[]
  readValues = () => {
    let data: any =
    {
      "username": this.username,
      "password": this.password
    }
    console.log(data)
    this.api.empLogin(data).subscribe(
      (response: any) => {
        if (response.status != "success") {
          alert("Invalid email or password!");
          this.username = ""
          this.password = ""
        }
        else {
          this.searchUsers=response
          this.route.navigate(['/employeePortal'])
        }
      }
    )
  }
}
