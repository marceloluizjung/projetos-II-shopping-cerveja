import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CookieService } from '../services/cookie.service';
import { Produto } from '../models/produto.models';

@Injectable({ providedIn: 'root' })
export class ProdutoService {
    
    constructor(private http: HttpClient, private cookieService: CookieService) {
    }

    
    listarProdutos() {
        return this.http.get<Produto[]>('http://localhost:8181/shopping-cerveja/produto/listar')
            .pipe(map(response => {
                return response;
            }));
    }
}

