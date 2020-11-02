import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Produto } from 'src/app/core/models/produto.models';
import { CookieService } from '../services/cookie.service';


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

    getProductById(id: String) {
        return this.http.get<Produto>(`http://localhost:8181/shopping-cerveja/produto/detalhar/${id}`)
            .pipe(map(response => {
                return response;
            }));
    }

    createProduct(product: Produto) {
        return this.http.post<Produto>(`http://localhost:8181/shopping-cerveja/produto/salvar`, product)
            .pipe(map(response => {
                return response;
            }));
    }

    deleteProductById(id: String) {
        return this.http.delete<void>(`http://localhost:8181/shopping-cerveja/produto/excluir/${id}`)
            .pipe(map(response => {
                return response;
            }));
    }
}

