import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor( private router:Router, private authService:AuthService){
  
  
  }
  
    Logout(){
  
      this.authService.Logout("login")

      this.router.navigateByUrl("login")

      
    }
    Register(){
      this.router.navigateByUrl("register")
    }
     Note(){
      this.router.navigateByUrl("note")
    }
}
