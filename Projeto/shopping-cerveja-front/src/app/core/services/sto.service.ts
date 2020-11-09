import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StoService {
    
    constructor(private http: HttpClient) {
    }

    
    public getImagesByProduct() {
        return this.http.get<any>('http://localhost:8181/shopping-cerveja/storage/files/Turma.jpeg');
    }

    public uploadImages(files: any) {
        return this.http.post('http://localhost:8181/shopping-cerveja/storage/upload', files);
    }
}