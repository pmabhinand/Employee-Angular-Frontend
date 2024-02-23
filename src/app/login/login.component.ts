import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AdminapiService } from '../services/adminapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:string=""
  password:string=""

  constructor(private api:AdminapiService , private router:Router){}

  login(){
    if(!this.email && !this.password){
      Swal.fire({
        icon: "info",
        title: "Oops...",
        text: "Please fill the form completely"
      });
    }
    else{
      

      this.api.authorization().subscribe({
        next:(res:any)=>{
          const {email,password} = res
          if(email==this.email && password==this.password){
            Swal.fire({
              icon: "success",
              title: "wow...",
              text:"Login successfull"
            });
            //save admin name and password
            this.api.updateData({d:true})

            localStorage.setItem("name",res.name)
            localStorage.setItem("pswd",res.password)

            //navigate
             this.router.navigateByUrl('dashboard')
          }
          else{
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text:"Invalid Email or password"
            });
          }
        },
        error:(res:any)=>{
          console.log(res);
          
        }

      })
    }
  }

}
