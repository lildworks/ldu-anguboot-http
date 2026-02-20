import { InjectionToken } from '@angular/core';

export const baseApiUrl = import.meta.env?.VITE_API_URL ?? '/api';

export const API = new InjectionToken<LDuAnguBootApiConfig>('API');

export const API_CONFIG: LDuAnguBootApiConfig = {
    url: baseApiUrl
};
