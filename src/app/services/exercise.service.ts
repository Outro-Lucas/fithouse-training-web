import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';
import { environment } from '../../environments/environment.development';
import { ExerciseCreate } from '../interfaces/exercise/exercise.type';

@Injectable({
    providedIn: 'root'
})
export class ExerciseService {

    constructor(private http: HttpClient, private global: GlobalService) { }

    private getHeaders(): HttpHeaders {
        const token = this.global.token;
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
    }

    getAll() {
        const headers = this.getHeaders();
        return this.http.get<any>(`${environment.apiUrl}/exercises`, { headers });
    }

    create(body: ExerciseCreate) {
        const headers = this.getHeaders();
        return this.http.post<any>(`${environment.apiUrl}/exercises`, body, { headers });
    }

    update(body: ExerciseCreate, id: string) {
        const headers = this.getHeaders();
        return this.http.put<any>(`${environment.apiUrl}/exercises/${id}`, body, { headers });
    }

    delete(id: string) {
        const headers = this.getHeaders();
        return this.http.delete<any>(`${environment.apiUrl}/exercises/${id}`, { headers });
    }

}