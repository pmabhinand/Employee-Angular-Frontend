import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employeeModel } from '../employee.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminapiService {

  constructor(private http:HttpClient) { }

  server_URL = 'https://employee-angular-backend.onrender.com'

  //create an object for the behaviour subject
  public sharedData = new BehaviorSubject(false)

  updateData(data:any){
    //to access the new value
   this.sharedData.next(data)
  }
  

  authorization(){
    return this.http.get(`${this.server_URL}/employee/1`)
  }

  addEmployeeApi(employee:employeeModel){
   return this.http.post(`${this.server_URL}/employee`,employee)
  }

  getAllEmployeeApi(){
   return this.http.get(`${this.server_URL}/employee`)
  }

  deleteEmployeeApi(id:string){
    return this.http.delete(`${this.server_URL}/employee/${id}`)
  }

  viewEmployeeApi(id:string){
   return this.http.get(`${this.server_URL}/employee/${id}`)
  }

  updateEmployeeApi(id:any,employee:any){
   return this.http.put(`${this.server_URL}/employee/${id}`,employee)
  }

  updateAdminApi(admin:any){
    return this.http.put(`${this.server_URL}/employee/1`,admin)
  }
}
