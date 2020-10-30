import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { User } from '../models/auth.models';
import { Compra } from '../models/compra.models';

@Injectable({ providedIn: 'root' })
export class UserProfileService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`/api/login`);
    }

    listarCompras(id: number) {
        var params = new HttpParams().append('id', id.toString());
        return this.http.get<Compra[]>('http://localhost:8181/shopping-cerveja/cliente/compras', {params})
            .pipe(map(response => {
                return response;
            }));
    }
}