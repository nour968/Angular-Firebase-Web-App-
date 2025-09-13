import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  createUserWithEmailAndPassword ,
  signInWithEmailAndPassword,
  signOut,getAuth,
  Auth
} from 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

   constructor( private router:Router) {

   }

  
  Login(email: string, password: string , redirection:string) {
    const auth = getAuth();
 return signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  }


  Logout(redirection:string) {
        const auth = getAuth();
    return signOut(auth)
       .then(() => {
       this.router.navigateByUrl(redirection)
         console.log("User logged out:");
             alert("User logged out")
       })
       .catch(error => {
         console.error("Login error:", error.code, error.message);
         if (error.code === 'auth/invalid-credential') {
           alert("Invalid email or password.");
        }
       });
  }


Register(email: string, password: string , redirection:string){
const auth = getAuth();
return createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}
}
