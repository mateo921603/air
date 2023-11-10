import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuhtService {

  constructor(
    private auht:Auth,
){}
register({email, password}:any){
    return createUserWithEmailAndPassword(this.auht,email,password);
}
login({email, password}:any){
    return signInWithEmailAndPassword(this.auht,email,password);
}

loginWhitGoogle(){
    return signInWithPopup(this.auht, new GoogleAuthProvider());
}

logout(){
    return signOut(this.auht);
}
}
