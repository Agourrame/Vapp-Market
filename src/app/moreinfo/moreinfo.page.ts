import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-moreinfo',
  templateUrl: './moreinfo.page.html',
  styleUrls: ['./moreinfo.page.scss'],
})
export class MoreinfoPage implements OnInit {

  constructor(private toastController: ToastController,private router:Router) {}


  ngOnInit() {

  }



  async presentToast() {
    const toast = await this.toastController.create({
      message: 'your cammand has send seccssec',
      duration: 2000,
      icon: 'checkmark-done-outline'
    });

     this.router.navigate(['/home']);

    await toast.present();
  }

}
