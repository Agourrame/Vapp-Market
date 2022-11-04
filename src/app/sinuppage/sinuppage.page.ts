import { Component, OnInit } from '@angular/core';
import { user } from '../Module/user';
import { LoginservService } from '../Services/loginserv.service';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { Product } from '../Module/Product';
@Component({
  selector: 'app-sinuppage',
  templateUrl: './sinuppage.page.html',
  styleUrls: ['./sinuppage.page.scss'],
})
export class SinuppagePage implements OnInit {

  constructor(private loginser:LoginservService) {
    const app= initializeApp(environment.firebase);
   }

  Form:user={
    email:'',
    password:'',
    phone:0,
    name:'',
    Products:[],
    adress:''
  }

  sinup(){
    this.loginser.sinup(this.Form);
  }

  ngOnInit() {
  }

}
