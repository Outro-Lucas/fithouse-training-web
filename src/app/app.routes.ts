import { Routes } from '@angular/router';
import { clientGuard, publicGuard, trainerGuard } from './guards/auth.guard';
import { LandingPage } from './pages/landing-page/landing-page';
import { Login } from './pages/login/login';
import { Tutorials } from './pages/tutorials/tutorials';
import { Dashboard } from './pages/dashboard/dashboard';
import { Category } from './pages/category/category';
import { Exercise } from './pages/exercise/exercise';

export const routes: Routes = [
    { path: '', component: LandingPage, canActivate: [publicGuard] },
    { path: 'auth', component: Login, canActivate: [publicGuard] },
    { path: 'treino', component: Tutorials, canActivate: [clientGuard] },
    { path: 'inicio', component: Dashboard, canActivate: [trainerGuard] },
    { path: 'categorias', component: Category, canActivate: [trainerGuard] },
    { path: 'exercicios', component: Exercise, canActivate: [trainerGuard] },
    { path: '**', redirectTo: '' } // fallback para qualquer rota inválida
];