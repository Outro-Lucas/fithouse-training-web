import { Injectable, Inject } from '@angular/core';
import { User } from '../interfaces/user/user.type';
import { CookieService } from './cookie.service';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    public user: User | null = null;
    public token: string | null = null;

    constructor(@Inject(CookieService) private cookies: CookieService) {
        const savedUser = this.cookies.getCookie('user');
        const savedToken = this.cookies.getCookie('token');

        if (savedUser && savedToken) {
            this.user = JSON.parse(savedUser);
            this.token = savedToken;
        }
    }

    setSession(user: User, token: string) {
        this.user = user;
        this.token = token;

        this.cookies.setCookie('user', JSON.stringify(user));
        this.cookies.setCookie('token', token);
    }

    clearSession() {
        this.user = null;
        this.token = null;

        this.cookies.deleteCookie('user');
        this.cookies.deleteCookie('token');
    }
}