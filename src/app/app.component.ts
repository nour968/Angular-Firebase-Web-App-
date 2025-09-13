import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { Note } from './notes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBarComponent, MainLayoutComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FireDemo';
}
