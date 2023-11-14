import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp({"projectId":"login-auth-2e53d","appId":"1:414968085410:web:83e621e7d0f66bf53110fb","storageBucket":"login-auth-2e53d.appspot.com","apiKey":"AIzaSyAUTmeCrb1EU4frX0s3yj7taTNITogZPuk","authDomain":"login-auth-2e53d.firebaseapp.com","messagingSenderId":"414968085410"})),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
