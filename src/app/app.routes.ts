import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"login",
        pathMatch:"full"
    },
    { 
        path:"login",
        component: LoginComponent
    },
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"registrar",
        component:RegisterComponent
    }
];
