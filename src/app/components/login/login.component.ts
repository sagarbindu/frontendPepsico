import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  user=new User();
  // email:string;
  // password:string;
  msg='';
  emailid='';
  constructor(private regService:RegistrationService, private router:Router){}
  
  ngOnInit() {
    
  }
  
  loginUser(){

    this.regService.loginUserFromRemote(this.user).subscribe(
      data=>{
        localStorage.setItem('loggedInUser',this.user.email);
        console.log(data);
      if(this.user.email==="admin1@gmail.com"){
              this.router.navigate(['/admin/home']);}
              else{
                //this.emailid=this.user.name;
                this.router.navigate(['/user/home'])
              }
    },
      error=> {console.log("error");
      this.msg="Incorrect credentials !!";
  }
    )
  }

  

}
