import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Registro } from './features/registro/registro';
import { Ingreso } from './features/ingreso/ingreso';
import { authGuard } from './guards/auth-guard';
import { Staff } from './shared/staff/staff';

export const routes: Routes = [

    { path: '', component: Home },

    { path: 'staff', component: Staff, canActivate: [authGuard]  },

    { path: 'registro', component: Registro},

    { path: 'login', component: Ingreso },
    
];
