import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';
import { environment } from '../../environments/environment.development';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    constructor(private http: HttpClient, private global: GlobalService) { }

    private getHeaders(): HttpHeaders {
        const token = this.global.token;
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
    }

    getAllCategories() {
        const headers = this.getHeaders();
        return this.http.get<any>(`${environment.apiUrl}/categories`, { headers });
    }

    createCategory(name: string) {
        const headers = this.getHeaders();
        return this.http.post<any>(`${environment.apiUrl}/categories`, { name }, { headers });
    }

    deleteCategory(id: string) {
        const headers = this.getHeaders();
        return this.http.delete<any>(`${environment.apiUrl}/categories/${id}`, { headers });
    }

}