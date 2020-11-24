import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Compra } from '../models/compra.models';

@Injectable({ providedIn: 'root' })
export class VendaService {
    constructor(private http: HttpClient) { }

    efetuarVenda(compra: Compra) {
        return this.http.post<Compra>(`http://localhost:8181/shopping-cerveja/venda/efetuar`, compra)
            .pipe(map(response => {
                return response;
            }));
    }
}