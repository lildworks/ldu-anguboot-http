import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LDuAnguBootHttpService {

    private readonly http$ = inject(HttpClient);

    public get http(): HttpClient { return this.http$; }

    public GET<T>(url: string): Observable<T> {
        return this.http.get<T>(url);
    }

    public POST<T>(url: string, data: T): Observable<T> {
        return this.http.post<T>(url, data);
    }

    public PUT<T>(url: string, data: T): Observable<T> {
        return this.http.put<T>(url, data);
    }

    public DELETE<T>(url: string): Observable<T> {
        return this.http.delete<T>(url);
    }
}
