import { Component, OnInit } from '@angular/core';
import { user } from '../Module/user';
import { LoginservService } from '../Services/loginserv.service';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {

  constructor(private loginserv:LoginservService) {
    const app= initializeApp(environment.firebase);
   }

  Form:user={
    email:'',
    password:''
  }


  get:string=this.loginserv.thenewuser;

  ngOnInit() {
  }

  login(){
      this.loginserv.login(this.Form);
  }

}
