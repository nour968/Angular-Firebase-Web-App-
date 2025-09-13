import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  emailR='';
  passwordR='';
  constructor(private router:Router,private authService:AuthService){
  }
Login(){
  this.authService.Register(this.emailR,this.passwordR,"dashboard")
  this.router.navigateByUrl("login")
  }
  
}
