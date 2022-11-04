import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { addDoc,collection,Firestore,doc,query,where ,getDocs,collectionData,updateDoc, deleteDoc, docData, docSnapshots} from '@angular/fire/firestore';
import { user } from '../Module/user';
import { Product } from '../Module/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductservService  {

  card:Product[]=[];

  constructor(public fire:Firestore) { }

  getdata():Observable<user[]>{
    const cards=collection(this.fire,'users');
    return collectionData(cards,{idField:'id'}) as Observable<user[]>;
 }

 getpro():Observable<Product[]>{
  const cards=collection(this.fire,'Product');
  return collectionData(cards,{idField:'id'}) as Observable<Product[]>;
}

  getproinfo(pro:Product){
    this.card=[];
    this.card.push(pro);

  }

  getget(){
    return this.card;
  }


}
