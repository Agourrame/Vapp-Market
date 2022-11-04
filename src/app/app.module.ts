import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {AuthModule} from '@angular/fire/auth';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideFirestore,getFirestore, Firestore} from '@angular/fire/firestore';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
       BrowserAnimationsModule,
       AuthModule,provideFirebaseApp(() => initializeApp(environment.firebase)),
       provideFirestore(() => getFirestore()),

       provideStorage(() => getStorage())

    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
