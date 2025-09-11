import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GlobalService } from '../services/global.service';
import { Role } from '../interfaces/user/user.type';

export const publicGuard: CanActivateFn = () => {
    const global = inject(GlobalService);
    const router = inject(Router);

    if (!global.user) {
        return true; // se não estiver logado, pode acessar
    }

    // se já estiver logado, redireciona para a rota correspondente
    if (global.user.type === 'client') {
        router.navigate(['/treino']);
    } else if (global.user.type === 'trainer') {
        router.navigate(['/inicio']);
    } else {
        router.navigate(['/']);
    }

    return false;
};

export const clientGuard: CanActivateFn = () => {
    const global = inject(GlobalService);
    const router = inject(Router);

    if (global.user?.type === Role.client) {
        return true;
    }

    router.navigate(['/']); // se não for client volta para landing
    return false;
};

export const trainerGuard: CanActivateFn = () => {
    const global = inject(GlobalService);
    const router = inject(Router);

    if (global.user?.type === Role.trainer) {
        return true;
    }

    router.navigate(['/']); // se não for trainer volta para landing
    return false;
};
