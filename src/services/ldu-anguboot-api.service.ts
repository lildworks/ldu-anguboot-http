import { inject, Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { API } from '../config/ldu-anguboot-api.config';
import { LDuAnguBootHttpService } from './ldu-anguboot-http.service';

@Injectable({ providedIn: 'root' })
export class LDuAnguBootApiService {

    private readonly API$ = inject(API);

    private readonly httpService = inject(LDuAnguBootHttpService);

    public url(endpoint: string): string {
        if (endpoint.startsWith('/')) {
            endpoint = endpoint.substring(1);
        }
        return `${this.API$.url}/${endpoint}`;
    }

    public GET<T>(endpoint: string): Observable<T> {
        return this.httpService.GET<T>(this.url(endpoint));
    }

    public POST<T>(endpoint: string, data: T): Observable<T> {
        return this.httpService.POST<T>(this.url(endpoint), data);
    }

    public PUT<T>(endpoint: string, data: T): Observable<T> {
        return this.httpService.PUT<T>(this.url(endpoint), data);
    }

    public DELETE<T>(endpoint: string): Observable<T> {
        return this.httpService.DELETE<T>(this.url(endpoint));
    }

    public getEcho(): Observable<Response> {
        return this.GET(`/echo`);
    }

    public async getVersion(): Promise<{ version: string | null; }> {
        try {
            return await firstValueFrom(this.GET(`/version`));
        } catch {
            return { version: null };
        }
    }
}
