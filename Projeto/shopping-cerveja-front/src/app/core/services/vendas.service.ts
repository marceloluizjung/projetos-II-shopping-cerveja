import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CookieService } from '../services/cookie.service';


@Injectable({ providedIn: 'root' })
export class VendasService {
    
    constructor(private http: HttpClient, private cookieService: CookieService) {
    }

    getVendasByVendedor(id: string) {
        return this.http.get(`http://localhost:8181/shopping-cerveja/venda/listar/${id}`)
            .pipe(map(response => {
                return response;
            }));
    }
}