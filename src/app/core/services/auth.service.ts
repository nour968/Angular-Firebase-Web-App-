import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constructor(private auth: Auth , private router:Router) {

  // }

  
  Login(email: string, password: string , redirection:string) {

    // return signInWithEmailAndPassword(this.auth, email, password)
    //   .then(userCredential => {
    // this.router.navigateByUrl(redirection)
    // alert("User logged in")
    //     console.log("User logged in:", userCredential.user);
        
    //   })
    //   .catch(error => {
    //       alert("Login error")
    //     console.error("Login error:", error.code, error.message);
    //     if (error.code === 'auth/invalid-credential') {
    //       alert("Invalid email or password.");
    //     }
    //   });
  }


  Logout(redirection:string) {
    // return signOut(this.auth)
    //   .then(() => {
    //   this.router.navigateByUrl(redirection)
    //     console.log("User logged out:");
             //alert("User logged out")
    //   })
    //   .catch(error => {
    //     console.error("Login error:", error.code, error.message);
    //     if (error.code === 'auth/invalid-credential') {
    //       alert("Invalid email or password.");
    //     }
    //   });
  }
}


