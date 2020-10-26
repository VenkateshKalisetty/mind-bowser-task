import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuth, IManager } from '../shared/models/app.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  TOKEN_NAME = '';
  constructor(private httpClient: HttpClient) {}

  signin(authData: IAuth): Observable<any> {
    const endpoint = ``;
    return this.httpClient.post<any>(endpoint, authData);
  }

  signup(data: IManager): Observable<boolean> {
    const endpoint = ``;
    return this.httpClient.post<boolean>(endpoint, data);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token ? true : false;
  }

  getToken(): string {
    const data = JSON.parse(localStorage.getItem(this.TOKEN_NAME));
    return data ? data.jwtToken : null;
  }

  removeToken(): void {
    localStorage.removeItem(this.TOKEN_NAME);
  }

  setLocalStorage(data: any): void {
    localStorage.setItem(this.TOKEN_NAME, JSON.stringify(data));
  }

}
