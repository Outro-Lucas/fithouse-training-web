import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { Login } from './pages/login/login';
import { Tutorials } from './pages/tutorials/tutorials';

export const routes: Routes = [
    { path: '', component: LandingPage },
    { path: 'auth', component: Login },
    { path: 'principal', component: Tutorials },
    // { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
    // { path: 'auth/login', component: LoginComponent, canActivate: [NoUserGuard] },
];
