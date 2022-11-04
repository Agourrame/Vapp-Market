import { Component, OnInit } from '@angular/core';
import { Product } from '../Module/Product';
import { ProductservService } from '../Services/productserv.service';

@Component({
  selector: 'app-cardinfo',
  templateUrl: './cardinfo.page.html',
  styleUrls: ['./cardinfo.page.scss'],
})
export class CardinfoPage implements OnInit {

  constructor(private proserv:ProductservService) { }

  products:Product[]=[]

  ngOnInit() {
  this.products=this.proserv.getget();
  }

}


// {
//   name:"samasung",
//   price:2000,
//   title:"samsung galaxy 128gb 6ram",
//   image:[
//     "../../assets/icon/samasung.png",
//     "https://firebasestorage.googleapis.com/v0/b/agoshop-ae14b.appspot.com/o/img%2FS21%20ultra.jpg?alt=media&token=5cc84310-f947-44b8-bc1b-acbf3d29ba35",
//     "https://images.samsung.com/is/image/samsung/p6pim/fr/sm-s906bidgeub/gallery/fr-galaxy-s22-plus-s906-417743-sm-s906bidgeub-531556817"
//   ],
//   type:"hello world"
// }
