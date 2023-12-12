import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class RootService {
  constructor(protected http: HttpClient) {}

  url: string = environment.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  all<T>(next: string): Observable<T> {
    return this.http.get<T>(this.url + `/${next}`);
  }

  add<T>(next: string, data: any): Observable<T> {
    return this.http.post<T>(this.url + `/${next}`, data);
  }
  update<T, U>(next: string, data: U): Observable<T> {
    return this.http.post<T>(this.url + `/${next}`, data);
  }

  byId<T>(id: number, next: string) {
    return this.http.get<T>(this.url + `/${next}/${id})`);
  }

  sendResetPasswordLink<T>(data: any) {
    return this.http.post<T>(this.url + '/reset_password_request', data);
  }

  resetPassword<T>(data: any) {
    return this.http.post<T>('http://127.0.0.1:8000/api/change_password', data);
  }
}
