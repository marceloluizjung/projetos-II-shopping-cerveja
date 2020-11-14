import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { CookieService } from '../services/cookie.service';
import { Vendedor } from '../models/vendedor. models';

@Injectable({ providedIn: 'root' })
export class VendedorService {
    
    constructor(private http: HttpClient, private cookieService: CookieService) {
    }

    
    listarVendedores() {
        return this.http.get<Vendedor[]>('http://localhost:8181/shopping-cerveja/vendedor/listar')
            .pipe(map(response => {
                return response;
            }));
    }

    getVendedorById(id: string) {
        return this.http.get<Vendedor>(`http://localhost:8181/shopping-cerveja/vendedor/detalhar/${id}`)
            .pipe(map(response => {
                return response;
            }));
    }
}

