import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Lead } from '../models/lead.model';
import { ApiResponse } from '../models/api-response.model';
import { Status } from '../components/enums/status.enum';

@Injectable({
    providedIn: 'root'
})
export class CardService {
    private apiUrl = 'https://localhost:7043/api/';

    constructor(private http: HttpClient) { }

    getLeadsByStatus(status: Status): Observable<Lead[]> {
        return this.http.get<ApiResponse>(`${this.apiUrl}lead?status=${status}`).pipe(
            map(response => response.data)
        );
    }

    putStatusLead(id: number, lead: Lead): Observable<boolean> {
        return this.http.put<ApiResponse>(`${this.apiUrl}lead/${id}`, lead).pipe(
            map(response => response.data)
        );
    }
}