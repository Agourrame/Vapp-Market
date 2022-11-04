import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginservService } from '../Services/loginserv.service';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router:Router,
    private loginserv:LoginservService
    ) {}

  ngOnInit() {
    const app= initializeApp(environment.firebase);

  }

  LoginWithGoogle(){
    this.loginserv.loginwithgoogle();
  }

}
