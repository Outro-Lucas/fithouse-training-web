import { Injectable } from '@angular/core';
import { User } from '../interfaces/user/user.type';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {

    public user: User | null = null;
    public token: string | null = null;

}
