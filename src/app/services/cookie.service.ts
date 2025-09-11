import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class CookieService {
    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

    setCookie(name: string, value: string, days: number = 7): void {
        if (!isPlatformBrowser(this.platformId)) return; // evita erro no SSR

        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = `${name}=${value || ''}${expires}; path=/`;
    }

    getCookie(name: string): string | null {
        if (!isPlatformBrowser(this.platformId)) return null;

        const nameEQ = name + '=';
        const ca = document.cookie.split(';');
        for (let c of ca) {
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    }

    deleteCookie(name: string): void {
        if (!isPlatformBrowser(this.platformId)) return;

        document.cookie = `${name}=; Max-Age=-99999999; path=/`;
    }
}
