import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/addEmployee",data);
  }

  
  viewEmployee=()=>{
    return this.http.get("http://localhost:8080/viewEmployee");
  }

  empLogin=(data:any)=>{
    return this.http.post("http://localhost:8080/employeeLogin",data);
  }

  securityLogin=(data:any)=>{
    return this.http.post("http://localhost:8080/securityLogin",data);
  }

  updateEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/updateEmployee",data);
  }
}
