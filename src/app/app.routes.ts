import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/home/home/home.component';
import { RegisterComponent } from './register/register.component';
import { NoteComponent } from './pages/note/note.component';

export const routes: Routes = [
    {path:"", redirectTo :"home" ,pathMatch:"full"},
    {path:"home", component:HomeComponent},  
    {path:"login", component:LoginComponent},
    {path:"register", component:RegisterComponent},
    {path:"note", component:NoteComponent}


];
