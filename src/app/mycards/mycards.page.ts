import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Product } from '../Module/Product';
import { user } from '../Module/user';
import { LoginservService } from '../Services/loginserv.service';
import { ProductservService } from '../Services/productserv.service';
@Component({
  selector: 'app-mycards',
  templateUrl: './mycards.page.html',
  styleUrls: ['./mycards.page.scss'],
})
export class MycardsPage implements OnInit {

  users:user[]=[];
  card:Product[]=[];

  constructor(private alertController: AlertController,private proserv:ProductservService,private loginserv:LoginservService) { }

  get:string=this.loginserv.getuseremail();

  ngOnInit() {

    this.loginserv.getUserByEmail("email",this.get).subscribe(item=>{
      this.users=item;
      this.users.forEach(e => {
         this.card=e.Products;
        console.log(e.Products)
     });
    })

  }

  removecard(pro:Product){
    this.card=this.card.filter((e)=>{
      return e!=pro;
    })
    this.users.forEach((e)=>{
      this.loginserv.updatemycard(e,this.card);
    })
  }
addorder(pro:Product){
  this.card.forEach(e => {
    if(e==pro){
      e.order++;
    }
  });
  this.users.forEach((e)=>{
    this.loginserv.updatemycard(e,this.card);
  })
}

incorder(pro:Product){
  this.card.forEach(e => {
    if(e==pro){
      if(e.order==1)return;
      e.order--;
    }
  });
  this.users.forEach((e)=>{
    this.loginserv.updatemycard(e,this.card);
  })
}



  async presentAlert(pro:Product) {
    const alert = await this.alertController.create({
      header: 'do you want delet this card',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            //not secsucc
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.removecard(pro);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();

  }
}
