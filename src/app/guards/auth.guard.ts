import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GlobalService } from '../services/global.service';
import { Role } from '../interfaces/user/user.type';

export const publicGuard: CanActivateFn = () => {
    const global = inject(GlobalService);
    const router = inject(Router);

    if (!global.user || !global.token) {
        return true;
    }

    // já logado
    if (global.user.type === Role.client) {
        router.navigate(['/treino']);
    } else if (global.user.type === Role.trainer) {
        router.navigate(['/inicio']);
    } else {
        router.navigate(['/']);
    }

    return false;
};

export const clientGuard: CanActivateFn = () => {
    const global = inject(GlobalService);
    const router = inject(Router);

    if (global.user?.type === Role.client && global.token) {
        return true;
    }

    router.navigate(['/']);
    return false;
};

export const trainerGuard: CanActivateFn = () => {
    const global = inject(GlobalService);
    const router = inject(Router);

    if (global.user?.type === Role.trainer && global.token) {
        return true;
    }

    router.navigate(['/']);
    return false;
};
