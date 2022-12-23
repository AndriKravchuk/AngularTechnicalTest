import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

const header = new HttpHeaders({
  'Content-Type': 'application/json',
});

@Injectable({ providedIn: 'root' })
export class HttpService {
  private url: string = environment.apiServerUrl;

  constructor(private http: HttpClient) {}

  post<T>(url, data, headers: any = null, params: any = null): Observable<T> {
    try {
      headers = new HttpHeaders(this.formatHeaders(headers));
      const body = this.parseBody(data);
      return this.http.post<T>(this.url + url, data, {headers: header,
        params,
        }
      );
    } catch (e) {
    }
  }

  put<T>(url, data, headers: any = null, params: any = null): Observable<T> {
    try {
      headers = new HttpHeaders(this.formatHeaders(headers));
      const body = this.parseBody(data);

      return this.http.put<T>(this.url + url, body, {
        headers,
        params,
      });
    } catch (e) {
    }
  }

  patch<T>(url, data, headers: any = null, params: any = null): Observable<T> {
    try {
      headers = new HttpHeaders(this.formatHeaders(headers));
      const body = this.parseBody(data);

      return this.http.patch<T>(this.url + url, data, {
        headers,
        params,
      });
    } catch (e) {
    }
  }

  get<T>(url, headers: any = null, params: any = {}): Observable<T> {
    try {
      headers = new HttpHeaders(this.formatHeaders(headers));

      return this.http.get<T>(this.url + url, {
        headers,
        params,
      });
    } catch (e) {
    }
  }

  delete<T>(url, headers: any = null, params: any = null): Observable<T> {
    try {
      headers = new HttpHeaders(this.formatHeaders(headers));

      return this.http.delete<T>(this.url + url, {
        headers,
        params,
      });
    } catch (e) {
    }
  }

  private parseBody(body) {
    try {
      const formData = new FormData();

      for (const key in body) {
        if (body.hasOwnProperty(key)) {
          const element = body[key];
          if (element) {
            formData.append(key, element);
          }
        }
      }

      return formData;
    } catch (e) {
    }
  }

  private formatHeaders(headers) {
    if (!headers) { return; }

    for (const key in headers) {
      if (headers.hasOwnProperty(key)) {
        if (typeof headers[key] !== 'string') { headers[key] = headers[key] + ''; }
      }
    }

    return headers;
  }
}
