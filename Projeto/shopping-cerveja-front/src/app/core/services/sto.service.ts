import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StoService {
    
    constructor(private http: HttpClient) {
    }

    
    public getImagesByOwner(ownerId: number) {
        return this.http.get<any>(`http://localhost:8181/shopping-cerveja/storage/filesByOwner/${ownerId}`);
    }

    public uploadImages(files: any) {
        return this.http.post('http://localhost:8181/shopping-cerveja/storage/upload', files);
    }
}