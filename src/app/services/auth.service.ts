import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { loginBody } from '../interfaces/user/user.type';
import { GlobalService } from './global.service';
import { environment } from '../../environments/environment.development';
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
        private router: Router,
        private global: GlobalService
    ) { }

    login(form: loginBody) {
        return this.http.post<any>(`${environment.apiUrl}/auth/login`, form);
    }

    logout(): void {
        this.global.token = null;
        this.global.user = null;
        this.router.navigate(['/']);
    }

}