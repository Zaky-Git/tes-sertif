import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface CertificateData {
    title: string;
    description: string;
    date: string;
    recipients: { name: string; role: string }[];
}

@Injectable({
    providedIn: 'root'
})
export class CertificateService {
    private apiUrl = 'http://127.0.0.1:8000/api';

    constructor(private http: HttpClient) { }

    generateCertificate(data: CertificateData): Observable<Blob> {
        return this.http.post(`${this.apiUrl}/generate-certificate`, data, { responseType: 'blob' });
    }
}
