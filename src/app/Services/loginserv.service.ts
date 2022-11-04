import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth,signInWithCredential,PhoneAuthProvider,RecaptchaVerifier, signInWithPopup,sendPasswordResetEmail,createUserWithEmailAndPassword,signInWithPhoneNumber, signInWithEmailAndPassword ,signOut,GoogleAuthProvider,FacebookAuthProvider, onAuthStateChanged } from "firebase/auth";
import { user } from '../Module/user';
import { addDoc,collection,Firestore,doc,query,where ,getDocs,collectionData,updateDoc, deleteDoc, docData, docSnapshots} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { $ } from 'protractor';
import { Product } from '../Module/Product';
@Injectable({
  providedIn: 'root'
})
export class LoginservService  {
  islogin:boolean=false;
  isloading:boolean=false;
  issinup:boolean=false;

  thenewuser:string='';
  theidofuser:string='';



  constructor(private router:Router,public fire:Firestore) { }

  getisloaiding(){
    return this.isloading;
  }

  getidofuser(){
    return this.getidofuser;
  }

  getuseremail(){
     return this.thenewuser
  }

  getislogin(){
    return this.islogin;
  }
  getissinup(){
    return this.issinup;
  }

  loginwithgoogle(){

    if(this.islogin){return;}

    this.isloading=true;
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider)
    .then((result) => {
      const credential:any = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      this.islogin=true;
      this.router.navigate(['/home'])

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      this.islogin=false;

    })
    .finally(()=>(this.isloading=false));
}

logout(){
  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
    this.router.navigate(['/login']);

    this.islogin=false;
  }).catch((error) => {
    // An error happened.
  });
}


   sinup(userd:user){

    if(this.issinup){return;}
    this.issinup=true;
    this.isloading=true;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth,userd.email,userd.password)
      .then((userCredential) => {
        userd.id=this.theidofuser.toString();
        this.adduser(userd);
        this.router.navigate(['/loginpage']);
      })
      .catch((error) => {

      })
      .finally(()=>(this.isloading=false))

   }

   login(form:user){

    if(this.islogin){return;}
    this.isloading=true;

   const auth = getAuth();
  signInWithEmailAndPassword(auth,form.email,form.password)
 .then((user) => {
   if(user){
     this.thenewuser=user.user.email;
     console.log(user.user.email);
     console.log();
   }
        this.islogin=true;
        //alert("you login seccss")
        this.router.navigate(['/home']);
   })
     .catch((error) => {
        this.islogin=false;
        alert("you login nooooooo")
   })

      .finally(()=>(this.isloading=false));
   }


   adduser(form:user){
    const db=collection(this.fire,'users')
    addDoc(db,form)
    .then((doc)=>{
      this.theidofuser=doc.id;
        console.log(doc.id);
    })
    .catch(()=>{
      alert("no added !!!");
    })
   }

   getUserByEmail(email:string,value:string):Observable<user[]>{
    const cards=collection(this.fire,'users');

    const q=query(cards,where(email,"==",value));

    return collectionData(q,{idField:'id'}) as Observable<user[]>;
  }

  updatemycard(userd:user,cards:any){
    const washingtonRef = doc(this.fire,"users",userd.id);
    updateDoc(washingtonRef, {
       Products:cards
    });
  }





  // reCaptchaVerfy:any;
  // testVerificationCode:any = "123456"

  // getOTP(number:any){
  //   const auth = getAuth();
  //   this.reCaptchaVerfy = new RecaptchaVerifier('sin-in-phone',{'size': 'invisible'},auth);

  //     signInWithPhoneNumber(auth,number,this.reCaptchaVerfy)
  //     .then((confirmationResult) => {
  //       this.reCaptchaVerfy.confirmationResult=confirmationResult;

  //     console.log(confirmationResult);
  //     localStorage.setItem('verificationId',JSON.stringify(confirmationResult.verificationId))
  //   //console.log(confirmationResult.verificationId)
  //     return confirmationResult.confirm(this.testVerificationCode)
  //     }).catch((error) => {
  //       // Error; SMS not sent
  //       // ...
  //     })

  // }

  // siginphone(v:any,o:any){
  //   const auth = getAuth();
  //   const credential = PhoneAuthProvider.credential(v,o);
  //   signInWithCredential(auth,credential)
  //   .then((res)=>{
  //     console.log(res);
  //   })
  // }

  // reCaptchaVerfy:any;

  // signInWithPhoneNumber(recaptchaVerifier, phoneNumber) {
  //   return new Promise<any>((resolve, reject) => {
  //     const auth = getAuth();
  //     this.reCaptchaVerfy = new RecaptchaVerifier('sin-in-phone',{'size': 'invisible'},auth);
  //     signInWithPhoneNumber(auth,phoneNumber, recaptchaVerifier)
  //       .then((confirmationResult) => {
  //         this.reCaptchaVerfy.confirmationResult = confirmationResult;
  //         resolve(confirmationResult);
  //       }).catch((error) => {
  //         console.log(error);
  //         reject('SMS not sent');
  //       });
  //   });
  // }

  // async enterVerificationCode(code) {
  //   return new Promise<any>((resolve, reject) => {
  //     const auth = getAuth();
  //     this.reCaptchaVerfy = new RecaptchaVerifier('sin-in-phone',{'size': 'invisible'},auth);
  //     this.reCaptchaVerfy.confirmationResult.confirm(code).then(async (result) => {
  //       console.log(result);
  //       const user = result.user;
  //       resolve(user);
  //     }).catch((error) => {
  //       reject(error.message);
  //     });

  //   });
  // }


}
