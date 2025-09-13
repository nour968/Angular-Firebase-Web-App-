import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

email:string=""
password:string=""
  constructor(private router:Router, private authService:AuthService){
  }

  Login(){
  this.authService.Login(this.email,this.password,"dashboard")
  this.router.navigateByUrl("home")
  }
}