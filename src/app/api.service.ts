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

  searchEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/searchEmployee",data);
  }

  getById=(id:any)=>{
    return this.http.post("http://localhost:8080/getEmpById",id);
  }

  
  deleteEmployee=(id:any)=>{
    return this.http.post("http://localhost:8080/deleteEmployee",id);
  }

  
  getSecurityById=(id:any)=>{
    return this.http.post("http://localhost:8080/getSecurityById",id);
  }

  
  addVisitorLog=(id:any)=>{
    return this.http.post("http://localhost:8080/addVisitor",id);
  }

  addEmployeeLog=(id:any)=>{
    return this.http.post("http://localhost:8080/addEmpLog",id);
  }

  searchTotal=(value:any)=>{
    return this.http.post("http://localhost:8080/searchTotal",value)
  }
  addLeaves=(value:any)=>{
    return this.http.post("http://localhost:8080/addLeaves",value)
  }

  leaveStatus=(value:any)=>{
    return this.http.post("http://localhost:8080/searchLeaves",value)
  }

  viewLeaves=(value:any)=>{
    return this.http.post("http://localhost:8080/searchLeaves",value)
  }
  viewLeaves2=()=>{
    return this.http.get("http://localhost:8080/Leaves")
  }
  editTotal=(value:any)=>{
    return this.http.post("http://localhost:8080/editTotal",value)
  }
  editLeaves=(value:any)=>{
    return this.http.post("http://localhost:8080/editLeaves",value)
  }

}
