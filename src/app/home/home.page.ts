import { Component, OnInit } from '@angular/core';
import { ProductservService } from '../Services/productserv.service';
import { user } from '../Module/user';
import { LoginservService } from '../Services/loginserv.service';
import { Product } from '../Module/Product';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


   users:user[]=[];


  constructor(private proserv:ProductservService,private loginserv:LoginservService) {
    const app= initializeApp(environment.firebase);

   }




  get:string=this.loginserv.getuseremail();

  ngOnInit() {

    this.loginserv.getUserByEmail("email",this.get).subscribe(item=>{
      this.users=item;

    })

  }

  logut(){
    this.loginserv.logout();
  }


  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  };


}
